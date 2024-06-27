import React from "react";
import mainHome from "../../images/main_home-bg.jpg";
import "./mainHome.css";
import "../../colors.css";

function MenuElement(props) {
  return (
    <React.Fragment>
      <div className="main__home">
        <div className="main__home-bg">
          <img id="home-bg__img" src={mainHome} alt="English Memocards" />
        </div>
        <div className="main__home-btn">
          <button id="home-btn__go">Let's go!</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MenuElement;
