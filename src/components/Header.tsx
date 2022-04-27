import EmailIcon from "./Email";
import GithubIcon from "./Github";
import "./Header.css";
import LinkedInIcon from "./Linkedin";

export default function Header() {
  return (
    <header>
      <div className="myName">David Zadok</div>
      <div className="links">
        <a aria-label="github" href="https://github.com/dzadok">{GithubIcon()}</a>
        <a aria-label="email" href="mailto:david@dzadok.dev">{EmailIcon({})}</a>
        <a aria-label="LinkedIn" href="https://linkedin.com/in/david-zadok">{LinkedInIcon()}</a>
      </div>
    </header>
  );
}
