import React, { useState, useRef } from "react";
import LineElemEdit from "./LineElemEdit.jsx";
import ManageButton from "./LineManageBtn.jsx";
// import wordsJSON from "../../data/words.json";
import btnAdd from "../../images/card-line__save.svg";
import btnClear from "../../images/card-line__undo.svg";
import "./mainListOfCards.css";
import "./cardLine.css";

function AddLine() {
  const initialState = {
    index: 0,
    english: "",
    transcription: "",
    russian: "",
    tags: "",
  };

  const [saveBtnDisable, setSaveBtnDisable] = useState(true);
  const [state, setState] = useState(initialState);
  // const prevStateRef = useRef(initialState);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.trim() === "") {
      e.target.style.borderColor = "red";
      setSaveBtnDisable(true);
    } else {
      e.target.style.borderColor = "white";
      setSaveBtnDisable(false);
    }
  };

  return (
    <React.Fragment>
      <LineElemEdit
        className="line__add-card__form"
        index={state.index}
        english={state.english}
        transcription={state.transcription}
        russian={state.russian}
        tags={state.tags}
        handleChange={handleChange}
      />
      <div className="line__add-card__btn">
        <ManageButton imgSrc={btnClear} imgAlt="clear" />
        <ManageButton imgSrc={btnAdd} imgAlt="add" disabled={saveBtnDisable} />
      </div>
    </React.Fragment>
  );
}

export default AddLine;
