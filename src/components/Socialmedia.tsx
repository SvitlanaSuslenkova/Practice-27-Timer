import Facebook from "../assets/icon-facebook.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";
import "./Socialmedia.css";

function Socialmedia() {
  return (
    <div className="socialMediaDiv">
      <img src={Facebook} alt="Facebook" className="icon" />
      <img src={Pinterest} alt="Facebook" className="icon" />
      <img src={Instagram} alt="Facebook" className="icon" />
    </div>
  );
}

export default Socialmedia;
