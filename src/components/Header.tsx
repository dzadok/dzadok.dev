import "./Header.css";
import EmailIcon from "./Icons/Email";
import GithubIcon from "./Icons/Github";
import LinkedInIcon from "./Icons/Linkedin";

export default function Header() {
  return (
    <header>
      <div className="myName">David Zadok</div>
      <div className="links">
        <a aria-label="github" href="https://github.com/dzadok">
          {GithubIcon()}
        </a>
        <a aria-label="email" href="mailto:david@dzadok.dev">
          {EmailIcon({})}
        </a>
        <a aria-label="LinkedIn" href="https://linkedin.com/in/david-zadok">
          {LinkedInIcon()}
        </a>
      </div>
    </header>
  );
}
