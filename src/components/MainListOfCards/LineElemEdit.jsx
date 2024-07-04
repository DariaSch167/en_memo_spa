import React from "react";
import "./cardLine.css";

function LineElemEdit(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <p className="list__line__word-index">{props.index}</p>
        <input
          className="list__line__word-en"
          type="text"
          value={props.english}
        />
        <input
          className="list__line__word-transcription"
          type="text"
          value={props.transcription}
        />
        <input
          className="list__line__word-ru"
          type="text"
          value={props.russian}
        />
        <input
          className="list__line__word-tags"
          type="text"
          value={props.tags}
        />
      </div>
    </React.Fragment>
  );
}

export default LineElemEdit;
