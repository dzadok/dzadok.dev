import { createContext } from "react";

export type theme = "light" | "dark";

export const ThemeContext = createContext({
  theme: setLightOrDarkMode(),
  updateTheme: (curr: theme) => {},
});

export function lightOrDark(): theme {
  const storage = localStorage.getItem("lightOrDark");
  switch (storage) {
    case "dark":
      return "dark";
    case "light":
      return "light";
    default:
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }
}

export function setLightOrDarkMode(): theme {
  const mode = lightOrDark();
  if (
    !document.body.classList.replace(mode === "dark" ? "light" : "dark", mode)
  ) {
    document.body.classList.add(mode);
  }
  return mode;
}
