import React, { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    if (
      state.english === "" ||
      state.transcription === "" ||
      state.russian === ""
    ) {
      setSaveBtnDisable(true);
    } else {
      setSaveBtnDisable(false);
    }
  }, [state]);

  const handleEditBtn = () => {
    setEditMode(!editMode);
  };

  const handleUndoBtn = () => {
    setEditMode(!editMode);
    setState(prevStateRef.current);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value.trim(),
    });
    if (e.target.value.trim() === "") {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "white";
    }
  };

  const [englishBorder, setEnglishBorder] = useState("white");
  const [transcriptionBorder, setTranscriptionBorder] = useState("white");
  const [russianBorder, setRussianBorder] = useState("white");

  const handleSave = () => {
    const regexEnglish = /^[a-zA-Z ]+$/g;
    const regexTranscription = /^\[(.+)\]$/g;
    const regexRussian = /^[а-яёА-ЯЁ ]+$/g;

    let inputErrors = "";

    inputErrors =
      state.english.match(regexEnglish) === null
        ? inputErrors + " Latin letters for English."
        : inputErrors;
    inputErrors =
      state.transcription.match(regexTranscription) === null
        ? inputErrors + " [...] format for Transcription."
        : inputErrors;
    inputErrors =
      state.russian.match(regexRussian) === null
        ? inputErrors + " Cyrillic letters for Russian."
        : inputErrors;

    if (inputErrors === "") {
      setEditMode(!editMode);
      console.log(state);
    } else {
      alert(inputErrors);
      state.english.match(regexEnglish) === null
        ? setEnglishBorder("red")
        : setEnglishBorder("white");
      state.transcription.match(regexTranscription) === null
        ? setTranscriptionBorder("red")
        : setTranscriptionBorder("white");
      state.russian.match(regexRussian) === null
        ? setRussianBorder("red")
        : setRussianBorder("white");
      setEditMode(true);
    }
  };

  return (
    <CardLineInner
      {...props}
      edit={editMode}
      english={state.english}
      englishBorder={englishBorder}
      transcription={state.transcription}
      transcriptionBorder={transcriptionBorder}
      russian={state.russian}
      russianBorder={russianBorder}
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
