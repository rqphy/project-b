import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="Header" >
            <div className="Header__logo" >Logo</div>
            <nav className="Header__nav" >
                <Link className="Header__link" to="/" >Home</Link>
                <Link className="Header__link" to="/bases" >Bases</Link>
                <Link className="Header__link" to="/frameworks" >Frameworks</Link>
                <Link className="Header__link" to="/projects" >Projects</Link>
                <Link className="Header__link" to="/git" >Git</Link>
            </nav>
            <a className="Header__about" href="#about" >À propos</a>
        </header>
    )
}

export default Header;