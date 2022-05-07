import { PropsWithChildren, ReactNode, useState } from "react";
import { lightOrDark, ThemeContext } from "../lightOrDark";

export default function ThemeProvider(children: PropsWithChildren<ReactNode>) {
  const [lightDark, setLightDark] = useState(lightOrDark());

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
