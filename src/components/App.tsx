import { useState } from "react";
import { lightOrDark, lightOrDarkContext } from "../lightOrDark";
import Blog from "./Blog";
import Header from "./Header";

export default function App() {
  const [lightDark, setLightDark] = useState(lightOrDark());
  return (
    <lightOrDarkContext.Provider
      value={{
        theme: lightDark,
        updateTheme: setLightDark,
      }}
    >
      <Header />
      <main>
        <Blog />
      </main>
    </lightOrDarkContext.Provider>
  );
}
