import { NavLink, Link } from "react-router-dom";

function Header() {
  const links = [
    { title: "Bases", url: "/bases" },
    {
      title: "Frameworks",
      url: "/frameworks",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    { title: "Git", url: "/git" },
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
