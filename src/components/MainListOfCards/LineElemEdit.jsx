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
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  // Тестовая колл-бек функция
  const handleChangeTest = (event) => {
    props.handleChangeTest(event.target.value);
  };

  return (
    <React.Fragment>
      <div className={props.className}>
        <p className="list__line__word-index">{props.index}</p>
        {/* Тестовый инпут: */}
        <input
          type="text"
          name="test"
          value={props.test}
          onChange={handleChangeTest}
        />
        <input
          className="list__line__word-en"
          type="text"
          name="english"
          value={state.english}
          onChange={handleChange}
        />
        <input
          className="list__line__word-transcription"
          type="text"
          name="transcription"
          value={state.transcription}
          onChange={handleChange}
        />
        <input
          className="list__line__word-ru"
          type="text"
          name="russian"
          value={state.russian}
          onChange={handleChange}
        />
        <input
          className="list__line__word-tags"
          type="text"
          name="tags"
          value={state.tags}
          onChange={handleChange}
        />
      </div>
    </React.Fragment>
  );
}

export default LineElemEdit;
