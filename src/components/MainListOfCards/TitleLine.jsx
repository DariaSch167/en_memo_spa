import React from "react";
import LineElemRead from "./LineElemRead.jsx";
import "./mainListOfCards.css";

function TitleLine() {
  return (
    <React.Fragment>
      <LineElemRead
        className="title__names"
        index=""
        english="English"
        transcription="Transcription"
        russian="Russian"
        tags="Tags"
      />
      <div className="title__btn">Actions</div>
    </React.Fragment>
  );
}

export default TitleLine;
