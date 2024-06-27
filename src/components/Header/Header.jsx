import React from "react";
import MenuElement from "./HeaderMenuElem.jsx";
import headerLogo from "../../images/header_logo.svg";
import headerHome from "../../images/header_menu-home.svg";
import headerList from "../../images/header_menu-list.svg";
import headerCard from "../../images/header_menu-card.svg";
import "./header.css";
import "../../colors.css";

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="header">
          <div className="header__title">
            <img src={headerLogo} alt="logo" />
            <h1>EN-RU memocards</h1>
          </div>
          <div className="header__menu">
            <MenuElement img={headerHome} name="Home" />
            <MenuElement img={headerList} name="List" />
            <MenuElement img={headerCard} name="Card" />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
export default Header;
