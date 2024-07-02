import React from "react";
import Page404 from "../../images/main_404-page.png";
import "./missing.css";

function Missing() {
  return (
    <React.Fragment>
      <main>
        <div className="main__404">
          <div className="main__404-text">
            <h2>404</h2>
            <p>Page not found</p>
          </div>
          <div className="main__404-banner">
            <img src={Page404} alt="Page404" />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
export default Missing;
