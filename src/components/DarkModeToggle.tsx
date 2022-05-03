import { useLayoutEffect, useState } from "react";
import {
  lightOrDark,
  lightOrDarkContext,
  setLightOrDarkMode,
} from "../lightOrDark";

export default function DarkModeToggle() {
  const [lightDark, setlightDark] = useState(lightOrDark());
  useLayoutEffect(() => {
    localStorage.setItem("lightOrDark", lightDark);
    setLightOrDarkMode();
  });
  return (
    <lightOrDarkContext.Consumer>
      {(ldContext) => (
        <button
          onClick={() =>
            setlightDark((prevLightDark) => {
              const newLightDark = prevLightDark === "dark" ? "light" : "dark";
              ldContext.updateTheme(newLightDark);
              return newLightDark;
            })
          }
        >
          Dark/Light
        </button>
      )}
    </lightOrDarkContext.Consumer>
  );
}
