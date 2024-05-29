import { useState } from "react";
import Navigation from "./Navigation";
import { List } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";
import MainLogo from "../../images/main logo.png";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <nav className="burger">
        <img src={MainLogo} alt="Little Lemon logo" className="nav-image"></img>

        <button className="burger-icon" onClick={handleToggle}>
          {navbarOpen ? <X size={"30px"} /> : <List size={"30px"} />}
        </button>
      </nav>
      <Navigation device="desktop container" />
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>
  );
}
