"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigation } from "@/data/profile";
import { useTheme } from "@/components/providers/ThemeProvider";
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="site-header">
      <nav
        className="shell nav"
        aria-label="Main navigation"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <Link
          className="brand"
          href="/"
          aria-label="mu. Muhammad Usama SQA & Automation — home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram">
            mu<span>.</span>
          </span>
          <span className="brand-detail">
            MUHAMMAD USAMA
            <br />
            <small>SQA & AUTOMATION</small>
          </span>
        </Link>
        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
          <button
            ref={toggle}
            className="menu-button"
            aria-expanded={open}
            aria-controls="navigation-links"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <div
          id="navigation-links"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {navigation.map(([name, href]) => (
            <Link
              key={href}
              prefetch={false}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
