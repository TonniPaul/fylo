import "./navbar.css";


const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img src="/assets/logo.svg" alt="logo" className="logo" />

        <ul className="nav_items">
          <li>
            <a href="#features" className="nav_link">
              Features
            </a>
          </li>
          <li>
            <a href="#team" className="nav_link">
              Team
            </a>
          </li>
          <li>
            <a href="#sign-in" className="nav_link">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
