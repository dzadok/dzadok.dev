import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <span className="myName">David Zadok</span>
      <span className="links">
        <a href="https://github.com/dzadok">github</a>&nbsp;
        <a href="mailto:david@dzadok.dev">email</a>&nbsp;
      </span>
    </header>
  );
}
