import Blog from "./Blog";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";
import React from "react";

export default function App() {
  return (
    <ThemeProvider>
      <a href="#main" className="skip-nav-link">
        Skip Navigation
      </a>
      <Header />
      <main id="main">
        <Blog />
      </main>
    </ThemeProvider>
  );
}
