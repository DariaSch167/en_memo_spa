import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="header__title-link">
            <div className="header__title">
              <img src={headerLogo} alt="logo" />
              <h1>EN-RU memocards</h1>
            </div>
          </Link>
          <nav>
            <div className="header__menu">
              <Link to="/en_memo_spa/" className="header__title-link">
                <MenuElement img={headerHome} name="Home" />
              </Link>
              <Link to="/en_memo_spa/list" className="header__title-link">
                <MenuElement img={headerList} name="List" />
              </Link>
              <Link to="/en_memo_spa/cards" className="header__title-link">
                <MenuElement img={headerCard} name="Card" />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}
export default Header;
