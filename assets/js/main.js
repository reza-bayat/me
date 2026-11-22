
(() => {
  "use strict";

  const root = document.documentElement;
  const themeButtons = document.querySelectorAll("[data-theme-toggle]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  const getStoredTheme = () => {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Theme still works for the current page if storage is unavailable.
    }
  };

  const preferredTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches ? "dark" : "light";

  const initialTheme = getStoredTheme() || preferredTheme;

  const applyTheme = (theme) => {
    root.dataset.theme = theme;

    themeButtons.forEach((button) => {
      const isDark = theme === "dark";

      button.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
      );

      button.setAttribute("aria-pressed", String(isDark));
      button.textContent = isDark ? "☀" : "◐";
    });
  };

  applyTheme(initialTheme);

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme =
        root.dataset.theme === "dark" ? "light" : "dark";

      applyTheme(nextTheme);
      saveTheme(nextTheme);
    });
  });

  const closeMenu = () => {
    if (!menuButton || !navigation) return;

    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  };

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Open navigation menu" : "Close navigation menu"
      );

      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        navigation.classList.contains("is-open") &&
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }
})();
