import React from "react";
import gitLogo from "../../images/footer_git.svg";
import "./footer.css";
import "../../colors.css";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer">
          <div className="footer__title">
            <img src={gitLogo} alt="Git" />
            <h3>DariaSch167</h3>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
