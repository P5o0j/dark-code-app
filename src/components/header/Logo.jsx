import { Link } from "react-router-dom";
import "../css/main-navigation-component.css";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src="/LogoWhtPNG.png" alt="main logo" className="logo" />
      </Link>
    </div>
  );
}

export default Logo;
