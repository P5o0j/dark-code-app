import Logo from "./header/Logo";
import Cart from "./header/Cart";

import "./css/main-navigation-component.css";

function MainNavigation() {
  return (
    <div className="header">
      <Logo />
      <Cart />
    </div>
  );
}

export default MainNavigation;
