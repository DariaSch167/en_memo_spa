import React from "react";
import MainHome from "./MainHome.jsx";
import "./main.css";
import "../../App.css";
import "../../colors.css";

function Main() {
  return (
    <React.Fragment>
      <main>
        <div className="main">
          <MainHome />
        </div>
      </main>
    </React.Fragment>
  );
}
export default Main;
