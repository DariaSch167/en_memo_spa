import React from "react";
import LineElemEdit from "./LineElemEdit.jsx";
import ManageButton from "./LineManageBtn.jsx";
// import wordsJSON from "../../data/words.json";
import btnAdd from "../../images/card-line__save.svg";
import btnClear from "../../images/card-line__undo.svg";
import "./mainListOfCards.css";
import "./cardLine.css";

function AddLine() {
  return (
    <React.Fragment>
      <LineElemEdit
        className="line__add-card__form"
        index="0"
        english=""
        transcription=""
        russian=""
        tags=""
      />
      <div className="line__add-card__btn">
        <ManageButton imgSrc={btnClear} imgAlt="clear" />
        <ManageButton imgSrc={btnAdd} imgAlt="add" />
      </div>
    </React.Fragment>
  );
}

export default AddLine;
