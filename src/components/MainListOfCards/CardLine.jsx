import React, { useState } from "react";
import CardLineInner from "./CardLineInner.jsx";
import "./cardLine.css";

function CardLine(props) {
  const [editMode, setEditMode] = useState(false);
  const [saveBtnDisable, setSaveBtnDisable] = useState(false);

  const handleChangeMode = () => {
    setEditMode(!editMode);
  };

  const handleEditBtn = () => {
    handleChangeMode();
  };

  const handleUndoBtn = () => {
    handleChangeMode();
    setSaveBtnDisable(true);
  };

  const [state, setState] = useState({
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
    tags: props.tags,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <CardLineInner
      {...props}
      edit={editMode}
      english={state.english}
      transcription={state.transcription}
      russian={state.russian}
      tags={state.tags}
      handleChange={handleChange}
      handleEditBtn={handleEditBtn}
      handleUndoBtn={handleUndoBtn}
      disabledSave={saveBtnDisable}
    />
  );
}

export default CardLine;
