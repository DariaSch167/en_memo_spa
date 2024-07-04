import React from "react";
import "./cardLine.css";

function LineElemRead(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <p className="list__line__word-index">{props.index}</p>
        <p className="list__line__word-en">{props.english}</p>
        <p className="list__line__word-transcription">{props.transcription}</p>
        <p className="list__line__word-ru">{props.russian}</p>
        <p className="list__line__word-tags">{props.tags}</p>
      </div>
    </React.Fragment>
  );
}

export default LineElemRead;
