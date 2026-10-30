import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox"],
});
try {
  const page = await browser.newPage();
  const response = await page.goto(
    `${process.env.PREVIEW_URL || "http://localhost:3100"}/resume`,
    { waitUntil: "networkidle" },
  );
  if (!response?.ok()) throw new Error("Resume page did not load");
  await page.emulateMedia({ media: "print", colorScheme: "light" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: "public/Muhammad-Usama-Resume.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
  });
  await mkdir("docs/screenshots", { recursive: true });
  console.log(
    "Generated public/Muhammad-Usama-Resume.pdf from shared website content. Inspect the rendered PDF before release.",
  );
} finally {
  await browser.close();
}
