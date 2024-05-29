import { Link } from "react-router-dom";
import MainLogo from "../../images/main logo.png";
import Menu from "../../images/menu.jpeg";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={MainLogo}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h3>Home</h3>
      </Link>
      <Link className="hover-effect" to="/about">
        <h3>About</h3>
      </Link>
      <a className="hover-effect" href={Menu} target="_blank" rel="noreferrer">
        <h3>Menu</h3>
      </a>
      <Link className="hover-effect" to="/reservations">
        <h3>Reservations</h3>
      </Link>
      <Link className="hover-effect" to="/order">
        <h3>Order</h3>
      </Link>
      <Link className="hover-effect" to="/login">
        <h3>Login</h3>
      </Link>
    </menu>
  );
}
