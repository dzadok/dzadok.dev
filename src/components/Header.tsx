import EmailIcon from "./Email";
import GithubIcon from "./Github";
import "./Header.css";
import LinkedInIcon from "./Linkedin";

export default function Header() {
  return (
    <header>
      <span className="myName">David Zadok</span>
      <span className="links">
        <a href="https://github.com/dzadok">{GithubIcon()}</a>
        <a href="mailto:david@dzadok.dev">{EmailIcon({})}</a>
        <a href="https://linkedin.com/in/david-zadok">{LinkedInIcon()}</a>
      </span>
    </header>
  );
}
