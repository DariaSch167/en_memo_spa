import React, { useState } from "react";
import "./card.css";

function Card(props) {
  const [translateClicked, setTranslateCliked] = useState(false);

  const handleShowTranslate = () => {
    setTranslateCliked(!translateClicked);
  };

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-side">
          <h2 className="card__word-tags">Tag: &laquo;{props.tags}&raquo;</h2>
          <p className="card__word-en">{props.english}</p>
          <p className="card__word-transcription">{props.transcription}</p>
          {translateClicked ? (
            <p className="card__word-ru">{props.russian}</p>
          ) : (
            <button id="card-translate__btn" onClick={handleShowTranslate}>
              Show translation
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Card;
