import React from "react";
import "./mainHome.css";
import "../../colors.css";
import HomeBg from "../../images/main_home-bg.jpg";

function MenuElement() {
  return (
    <React.Fragment>
      <main>
        <div className="main">
          <div className="main__home">
            <div className="main__home-bg">
              <img src={HomeBg} alt="English memo" />
            </div>
            <div className="main__home-btn">
              <button id="home-btn__go">Let's go!</button>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
export default MenuElement;
