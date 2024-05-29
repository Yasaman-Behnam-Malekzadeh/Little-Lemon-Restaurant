import { Link } from "react-router-dom";
import FooterLogo from "../../images/footer logo.png";
import Menu from "../../images/menu.jpeg";
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img src={FooterLogo} alt="Little Lemon logo"></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href={Menu} target="_blank" rel="noreferrer">
              Menu
            </a>
            <Link to="/reservation">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </div>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>12305,Berlin</li>
            <br></br>
            <li>(123)-456-789</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </ul>
        </li>
      </menu>
    </footer>
  );
}
