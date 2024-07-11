import React, { useState } from "react";
import "./cardLine.css";

function LineElemEdit(props) {
  const [state, setState] = useState({
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
    tags: props.tags,
  });

  const handleChange = (e) => {
    setState(e.target.value);
  };

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setState({
  //     ...state,
  //     [e.target.name]: value,
  //   });
  // };

  return (
    <React.Fragment>
      <div className={props.className}>
        <p className="list__line__word-index">{props.index}</p>
        <input
          className="list__line__word-en"
          type="text"
          value={state.english}
          onChange={handleChange}
        />
        <input
          className="list__line__word-transcription"
          type="text"
          value={state.transcription}
          onChange={handleChange}
        />
        <input
          className="list__line__word-ru"
          type="text"
          value={state.russian}
          onChange={handleChange}
        />
        <input
          className="list__line__word-tags"
          type="text"
          value={state.tags}
          onChange={handleChange}
        />
      </div>
    </React.Fragment>
  );
}

export default LineElemEdit;
