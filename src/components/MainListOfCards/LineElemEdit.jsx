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
          name="english"
          value={props.english}
          onChange={(e) => props.handleChange(e)}
        />
        <input
          className="list__line__word-transcription"
          type="text"
          name="transcription"
          value={props.transcription}
          onChange={(e) => props.handleChange(e)}
        />
        <input
          className="list__line__word-ru"
          type="text"
          name="russian"
          value={props.russian}
          onChange={(e) => props.handleChange(e)}
        />
        <input
          className="list__line__word-tags"
          type="text"
          name="tags"
          value={props.tags}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
    </React.Fragment>
  );
}

export default LineElemEdit;
