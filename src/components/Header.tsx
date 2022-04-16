import React from "react";

export default function Header() {
  return (
    <header>
      <h1>
        David Zadok
        <span className="links">
          <a href="https://github.com/dzadok">github</a>&nbsp;
          <a href="mailto:david.zadok.jr@gmail.com">email</a>&nbsp;
          <a href="tel:1231231234">phone</a>
        </span>
      </h1>
    </header>
  );
}
