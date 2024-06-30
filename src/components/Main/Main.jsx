import React from "react";
// import MainHome from "../MainHome/MainHome.jsx";
// import MainCards from "../MainCards/MainCards.jsx";
import MainListOfCards from "../MainListOfCards/MainListOfCards.jsx";
import "./main.css";
import "../../App.css";
import "../../colors.css";

function Main() {
  return (
    <React.Fragment>
      <main>
        <div className="main">
          <MainListOfCards />
        </div>
      </main>
    </React.Fragment>
  );
}
export default Main;
