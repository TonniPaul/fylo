import "./navbar.css";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />

        <ul className="nav_items">
          <li>
            <a href="" className="nav_link">
              Features
            </a>
          </li>
          <li>
            <a href="" className="nav_link">
              Team
            </a>
          </li>
          <li>
            <a href="" className="nav_link">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
