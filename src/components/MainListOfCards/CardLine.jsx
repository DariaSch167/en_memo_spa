import React, { useState, useRef } from "react";
import CardLineInner from "./CardLineInner.jsx";
import "./cardLine.css";

function CardLine(props) {
  const [editMode, setEditMode] = useState(false);
  const [saveBtnDisable, setSaveBtnDisable] = useState(false);

  const initialState = {
    index: props.index,
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
    tags: props.tags,
  };

  const [state, setState] = useState(initialState);
  const prevStateRef = useRef(initialState);

  const handleChangeMode = () => {
    setEditMode(!editMode);
  };

  const handleEditBtn = () => {
    handleChangeMode();
  };

  const handleUndoBtn = () => {
    handleChangeMode();
    setState(prevStateRef.current);
  };

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

  const handleSave = () => {
    handleChangeMode();
    console.log(state);

    const regexEnglish = /^[a-zA-Z ]+$/g;
    const regexTranscription = /\[(.+)\]/g;
    const regexRussian = /^[а-яёА-ЯЁ ]+$/g;

    // Проверочка проверки полей:
    console.log(
      state.english.match(regexEnglish) +
        state.transcription.match(regexTranscription) +
        state.russian.match(regexRussian)
    );

    let inputErrors = "";
    inputErrors =
      state.english.match(regexEnglish) === null
        ? " Latin letters for English."
        : state.transcription.match(regexTranscription) === null
        ? inputErrors + " [...] format for Transcription."
        : state.russian.match(regexRussian) === null
        ? inputErrors + " Cyrillic letters for Russian."
        : "";

    if (inputErrors === "") {
      handleChangeMode();
    } else {
      alert(inputErrors);
      setEditMode(true);
    }
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
      handleSave={handleSave}
      disabledSave={saveBtnDisable}
    />
  );
}

export default CardLine;
