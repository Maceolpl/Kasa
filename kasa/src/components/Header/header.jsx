import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";
import "./header.scss";

function Header() {
  return (
    <header style={{ background: "white", color: "black" }}>
      <NavLink to="/">
        <img src={logo} alt="Logo Kasa" className="header__logo" />
      </NavLink>
      <ul>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/about">A Propos</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;