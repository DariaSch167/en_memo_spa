import React from "react";
// import MainHome from "../MainHome/MainHome.jsx";
import MainCards from "../MainCards/MainCards.jsx";
import "./main.css";
import "../../App.css";
import "../../colors.css";

function Main() {
  return (
    <React.Fragment>
      <main>
        <div className="main">
          <MainCards />
        </div>
      </main>
    </React.Fragment>
  );
}
export default Main;
