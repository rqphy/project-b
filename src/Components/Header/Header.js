import { NavLink } from "react-router-dom";

function Header() {
  const links = [
    { title: "Acceuil", url: "/" },
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
      <div className="Header__logo">Logo</div>
      <nav className="Header__nav">
        {links.map((link, index) => (
          <NavLink
            className="Header__link"
            to={link.url}
            key={index}
            activeClassName="Header__link--act"
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
