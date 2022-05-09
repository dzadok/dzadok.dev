import { React, useContext } from "react";
import { ThemeContext } from "../lightOrDark";
import DarkModeToggle from "./DarkModeToggle";
import "./Header.css";
import EmailIcon from "./Icons/Email";
import GithubIcon from "./Icons/Github";
import LinkedInIcon from "./Icons/Linkedin";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={theme}>
      <div className="myName">David Zadok</div>
      <div className="links">
        <a aria-label="github" href="https://github.com/dzadok">
          <GithubIcon className={theme}></GithubIcon>
        </a>
        <a aria-label="email" href="mailto:david@dzadok.dev">
          <EmailIcon height="3.5rem" width="3.5rem"></EmailIcon>
        </a>
        <a aria-label="LinkedIn" href="https://linkedin.com/in/david-zadok">
          <LinkedInIcon></LinkedInIcon>
        </a>
      </div>
      <DarkModeToggle></DarkModeToggle>
    </header>
  );
}
