import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          RH
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>

          <a
            href="https://github.com/richardrhanly-us"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/richardhanly/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;