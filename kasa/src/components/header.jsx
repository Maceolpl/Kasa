import logo from "./LOGO.png";
import "../styles/header.scss";

function Header() {
  return (
    <header style={{ background: "white", color: "black" }}>
      <img src={logo} alt="Logo Kasa" className="header__logo" />
      <ul><li><a href="">Accueil</a></li><li><a href="">A Propos</a></li></ul>
    </header>
  );
}

export default Header;