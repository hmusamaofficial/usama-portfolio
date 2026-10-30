"use client";
import { createContext, useContext, useSyncExternalStore } from "react";
const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });
function subscribe(callback: () => void) {
  window.addEventListener("theme-change", callback);
  return () => window.removeEventListener("theme-change", callback);
}
function snapshot() {
  return document.documentElement.dataset.theme || "light";
}
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, snapshot, () => "light");
  function toggleTheme() {
    const next = snapshot() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Storage is optional. */
    }
    window.dispatchEvent(new Event("theme-change"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  return useContext(ThemeContext);
}
