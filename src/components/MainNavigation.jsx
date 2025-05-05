import Logo from "./header/Logo";
import Cart from "./header/Cart";
import Menu from "./header/Menu";

import "./css/main-navigation-component.css";

function MainNavigation() {
  return (
    <>
      <div className="logo-row">
        <Logo />
        <Cart />
      </div>
      <Menu />
    </>
  );
}

export default MainNavigation;
