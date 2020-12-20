import { NavLink, Link } from "react-router-dom";
import Bases from "../../assets/navbar/bases.png";
import Framework from "../../assets/navbar/frameworks.png";
import Projects from "../../assets/navbar/projects.png";
import Git from "../../assets/navbar/git.png";
import Home from "../../assets/navbar/home.png";

function Header() {
  const links = [
    { title: "Acceuil", url: "/", imgUrl: Home },
    { title: "Bases", url: "/bases", imgUrl: Bases },
    {
      title: "Frameworks",
      url: "/frameworks",
      imgUrl: Framework,
    },
    {
      title: "Projects",
      url: "/projects",
      imgUrl: Projects,
    },
    { title: "Git", url: "/git", imgUrl: Git },
  ];

  return (
    <header className="Header">
      <Link className="Header__logo" to="/">
        Logo
      </Link>
      <nav className="Header__nav">
        {links.map((link, index) => (
          <NavLink
            className="Header__link"
            to={link.url}
            key={index}
            activeClassName="Header__link--active"
          >
            <img className="Header__image" alt="img" src={link.imgUrl}></img>
            {link.title}
          </NavLink>
        ))}
      </nav>
      <a className="Header__about" href="#about">
        À propos
      </a>
    </header>
  );
}

export default Header;
