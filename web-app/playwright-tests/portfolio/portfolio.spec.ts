import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/about",
  "/skills",
  "/experience",
  "/projects",
  "/services",
  "/contact",
  "/resume",
  "/projects/erp-quality",
  "/projects/panda-snake",
  "/projects/streak-stats",
];
for (const path of routes)
  test(`page, metadata, links and layout: ${path}`, async ({
    page,
    request,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("link[rel=canonical]")).toHaveAttribute(
      "href",
      `https://hmusama.vercel.app${path === "/" ? "" : path}`,
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.{30,}/,
    );
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/,
    );
    const links = await page
      .locator('a[href^="/"]')
      .evaluateAll((a) => [...new Set(a.map((x) => x.getAttribute("href")!))]);
    for (const href of links)
      expect((await request.get(href)).status(), href).toBeLessThan(400);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `overflow on ${path}`,
    ).toBe(true);
    expect(errors).toEqual([]);
  });
test("navigation, keyboard, theme persistence and reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "light" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  const menu = page.getByRole("button", { name: /^(Menu|Close)$/ });
  if (await menu.isVisible()) {
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(menu).toBeFocused();
    await menu.click();
  }
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("work");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});
for (const theme of ["light", "dark"] as const)
  test(`accessibility ${theme}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: theme });
    for (const route of ["/", "/contact", "/resume"]) {
      await page.goto(route);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(results.violations, `${route} ${theme}`).toEqual([]);
    }
  });
for (const outcome of ["success", "partial", "failure", "network"] as const)
  test(`contact ${outcome}`, async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      if (outcome === "network") return route.abort();
      await route.fulfill({
        status: outcome === "failure" ? 503 : 200,
        contentType: "application/json",
        body: JSON.stringify(
          outcome === "failure"
            ? { error: "Temporarily unavailable" }
            : { success: true, confirmationSent: outcome === "success" },
        ),
      });
    });
    await page.goto("/contact");
    await page.getByLabel("Name", { exact: true }).fill("Test Visitor");
    await page.getByLabel("Email", { exact: true }).fill("visitor@example.com");
    await page.getByLabel("Subject").fill("QA project");
    await page
      .getByLabel("Message", { exact: true })
      .fill("Please help test this workflow.");
    await page.getByRole("button", { name: "Send message" }).click();
    const status = page.getByRole("status");
    await expect(status).toContainText(
      outcome === "success"
        ? "confirmation email is on its way"
        : outcome === "partial"
          ? "do not need to submit again"
          : outcome === "failure"
            ? "Temporarily unavailable"
            : "Delivery could not be confirmed",
    );
    await expect(page.getByLabel("Message", { exact: true })).toHaveValue(
      outcome === "failure" || outcome === "network"
        ? "Please help test this workflow."
        : "",
    );
  });
test("sitemap, social image, legacy resume redirect, PDF and 404", async ({
  request,
  page,
}) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).toContain("/projects/panda-snake");
  const image = await request.get("/opengraph-image");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  const resume = await request.get("/resume.html");
  expect(resume.url()).toContain("/resume");
  const pdf = await request.get("/Muhammad-Usama-Resume.pdf");
  expect(pdf.status()).toBe(200);
  expect((await pdf.body()).subarray(0, 4).toString()).toBe("%PDF");
  expect((await page.goto("/not-a-real-page"))?.status()).toBe(404);
  await expect(
    page.getByRole("link", { name: "Go home", exact: true }),
  ).toBeVisible();
});

test("contact validation, rate limit and duplicate-submit protection", async ({
  page,
}) => {
  let requests = 0;
  let release!: () => void;
  const pending = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route("**/api/contact", async (route) => {
    requests++;
    await pending;
    await route.fulfill({
      status: 429,
      contentType: "application/json",
      body: JSON.stringify({
        error: "Too many messages. Please try again later.",
      }),
    });
  });
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send message" }).click();
  expect(requests).toBe(0);
  await expect(page.getByLabel("Name", { exact: true })).toBeFocused();
  await page.getByLabel("Name", { exact: true }).fill("Test Visitor");
  await page.getByLabel("Email", { exact: true }).fill("visitor@example.com");
  await page.getByLabel("Subject").fill("QA project");
  await page.getByLabel("Message", { exact: true }).fill("A valid inquiry");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("button", { name: "Sending" })).toBeDisabled();
  await expect.poll(() => requests).toBe(1);
  release();
  await expect(page.getByRole("status")).toContainText("Too many messages");
  await expect(page.getByLabel("Message", { exact: true })).toHaveValue(
    "A valid inquiry",
  );
  await expect(
    page.getByRole("button", { name: "Send message" }),
  ).toBeEnabled();
  expect(requests).toBe(1);
});
