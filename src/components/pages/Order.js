import HeroImage from "../../images/portion1.jpeg";
import { ArrowClockwise } from "react-bootstrap-icons";
export default function Login() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-icon">
        <ArrowClockwise size={"80px"} />
      </div>
    </header>
  );
}
