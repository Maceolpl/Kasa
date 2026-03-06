import logofooter from "../../assets/images/LOGOfooter.png";
import "./footer.scss";

function Footer() {
  return (
    <footer style={{ padding: "20px", background: "black", color: "white", marginTop: "0px" }}>
      <img src={logofooter} alt="Logo Kasa" className="footer__logo" />
      <p>© 2026 Kasa. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;