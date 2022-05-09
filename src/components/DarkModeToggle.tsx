import { React, useContext } from "react";
import { setLightOrDarkMode, ThemeContext } from "../lightOrDark";
import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";

export default function DarkModeToggle() {
  const { theme, updateTheme } = useContext(ThemeContext);

  return (
    <div
      tabIndex={0}
      aria-checked
      aria-label="Dark Mode Toggle"
      role={"switch"}
      className={theme}
      id="darkModeToggle"
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        updateTheme(newTheme);
        localStorage.setItem("lightOrDark", newTheme);
        setLightOrDarkMode();
      }}
    >
      <Sun height="2.5rem" width="2.5rem" className={theme}></Sun>
      <span id="toggle"></span>
      <Moon height="2.5rem" width="2.5rem" className={theme}></Moon>
    </div>
  );
}
