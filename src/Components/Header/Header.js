import { Link } from "react-router-dom";

function Header() {
  const currentPath = window.location.href.substring(21);
  const links = [
    { title: "Acceuil", url: "/", active: currentPath === "/" },
    { title: "Bases", url: "/bases", active: currentPath === "/bases" },
    {
      title: "Frameworks",
      url: "/frameworks",
      active: currentPath === "/frameworks",
    },
    {
      title: "Projects",
      url: "/projects",
      active: currentPath === "/projects",
    },
    { title: "Git", url: "/git", active: currentPath === "/git" },
  ];

  return (
    <header className="Header">
      <div className="Header__logo">Logo</div>
      <nav className="Header__nav">
        {links.map((link, index) => (
          <Link
            className={
              link.active ? "Header__link Header__link--active" : "Header__link"
            }
            to={link.url}
            key={index}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <a className="Header__about" href="#about">
        À propos
      </a>
    </header>
  );
}

export default Header;
