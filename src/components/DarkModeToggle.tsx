import { useContext } from "react";
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
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        updateTheme(newTheme);
        localStorage.setItem("lightOrDark", newTheme);
        setLightOrDarkMode();
      }}
    >
      <Sun height="3rem" width="3rem" className={theme}></Sun>
      <Moon height="3rem" width="3rem" className={theme}></Moon>
    </div>
  );
}
