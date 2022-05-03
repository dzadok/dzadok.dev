import { createContext } from "react";

export type lightOrDarkMode = "light" | "dark";

export const lightOrDarkContext = createContext({
  theme: setLightOrDarkMode(),
  updateTheme: (curr: lightOrDarkMode) => {},
});

export function lightOrDark(): lightOrDarkMode {
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

export function setLightOrDarkMode(): lightOrDarkMode {
  const mode = lightOrDark();
  if (
    !document.body.classList.replace(mode === "dark" ? "light" : "dark", mode)
  ) {
    document.body.classList.add(mode);
  }
  return mode;
}
