import React from "react";
import "./cardLine.css";

function LineElemEdit(props) {
  return (
    <React.Fragment>
      <div name="form" className={props.className}>
        <p className="list__line__word-index">{props.index}</p>
        <input
          className="list__line-input"
          type="text"
          name="english"
          value={props.english}
          style={{ borderColor: props.englishBorder }}
          onChange={(e) => props.handleChange(e)}
        />
        <input
          className="list__line-input"
          type="text"
          name="transcription"
          value={props.transcription}
          style={{ borderColor: props.transcriptionBorder }}
          onChange={(e) => props.handleChange(e)}
        />
        <input
          className="list__line-input"
          type="text"
          name="russian"
          value={props.russian}
          style={{ borderColor: props.russianBorder }}
          onChange={(e) => props.handleChange(e)}
        />
        <input
          className="list__line-input"
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
