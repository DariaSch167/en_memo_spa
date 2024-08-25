import React, { useState, useRef, useEffect, useContext } from "react";
import CardLineInner from "./CardLineInner.jsx";
import "./cardLine.css";
import { APIWordsContext } from "../../context/APIWordsContext.jsx";

function CardLine(props) {
  const value = useContext(APIWordsContext);

  const [editMode, setEditMode] = useState(false);
  const [saveBtnDisable, setSaveBtnDisable] = useState(false);

  const initialState = {
    id: props.id,
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
    setEnglishBorder("white");
    setTranscriptionBorder("white");
    setRussianBorder("white");
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

  const handleSave = (id, state) => {
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
      value.updateWord(id, state);
      setEditMode(!editMode);
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

  const handleDelete = (id) => {
    value.deleteWord(id);
  };

  return (
    <CardLineInner
      {...props}
      edit={editMode}
      id={state.id}
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
      handleDelete={() => handleDelete(state.id)}
      handleSave={() => handleSave(state.id, state)}
      disabledSave={saveBtnDisable}
    />
  );
}

export default CardLine;
