import React, { useState, useEffect, useRef, useContext } from "react";
import LineElemEdit from "./LineElemEdit.jsx";
import ManageButton from "./LineManageBtn.jsx";
import btnAdd from "../../images/card-line__save.svg";
import btnClear from "../../images/card-line__undo.svg";
import "./mainListOfCards.css";
import "./cardLine.css";
import { APIWordsContext } from "../../context/APIWordsContext.jsx";

function AddLine() {
  const value = useContext(APIWordsContext);

  const initialState = {
    index: 0,
    english: "",
    transcription: "",
    russian: "",
    tags: "",
  };

  const [saveBtnDisable, setSaveBtnDisable] = useState(true);
  const [state, setState] = useState(initialState);
  const prevStateRef = useRef(initialState);

  const wordsLength = value.words.length;
  const newWordsID = value.words[wordsLength - 1].id + 1;

  const newWord = {
    id: newWordsID,
    english: state.english,
    transcription: state.transcription,
    russian: state.russian,
    tags: state.tags,
    tags_json: '[""]',
  };

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

  const handleClearBtn = () => {
    setState(prevStateRef.current);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [englishBorder, setEnglishBorder] = useState("white");
  const [transcriptionBorder, setTranscriptionBorder] = useState("white");
  const [russianBorder, setRussianBorder] = useState("white");

  const handleAddBtn = () => {
    const regexEnglish = /^[a-zA-Z ]+$/g;
    const regexTranscription = /^\[(.+)\]$/g;
    const regexRussian = /^[а-яёА-ЯЁ ]+$/g;

    setEnglishBorder("white");
    setTranscriptionBorder("white");
    setRussianBorder("white");

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
      console.log(newWord);
      value.addWord(newWord);
      setState(prevStateRef.current);
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
    }
  };

  return (
    <React.Fragment>
      <LineElemEdit
        className="line__add-card__form"
        index={state.index}
        english={state.english}
        englishBorder={englishBorder}
        transcription={state.transcription}
        transcriptionBorder={transcriptionBorder}
        russian={state.russian}
        russianBorder={russianBorder}
        tags={state.tags}
        handleChange={handleChange}
      />
      <div className="line__add-card__btn">
        <ManageButton
          imgSrc={btnClear}
          imgAlt="clear"
          onClick={handleClearBtn}
        />
        <ManageButton
          imgSrc={btnAdd}
          imgAlt="add"
          disabled={saveBtnDisable}
          onClick={handleAddBtn}
        />
      </div>
    </React.Fragment>
  );
}

export default AddLine;
