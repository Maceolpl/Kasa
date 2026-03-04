import logo from "./LOGO.png";

function Header() {
  return (
    <header style={{ padding: "20px", background: "white", color: "white" }}>
      <img src={logo} alt="Logo Kasa" className="header__logo" />
    </header>
  );
}

export default Header;