
(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");

  const savedTheme = localStorage.getItem("theme");
  const preferredDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const initialTheme =
    savedTheme || (preferredDark ? "dark" : "light");

  root.dataset.theme = initialTheme;

  themeButton?.addEventListener("click", () => {
    const nextTheme =
      root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);

    themeButton.setAttribute(
      "aria-label",
      nextTheme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme"
    );
  });
})();
