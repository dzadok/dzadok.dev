import React from "react";
import { lightOrDark, ThemeContext } from "../lightOrDark";

export default function ThemeProvider(
  children: React.PropsWithChildren<React.ReactNode>
) {
  const [lightDark, setLightDark] = React.useState(lightOrDark());

  const toggleTheme = () => {
    setLightDark(lightDark === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: lightDark,
        updateTheme: toggleTheme,
      }}
    >
      {children.children}
    </ThemeContext.Provider>
  );
}
