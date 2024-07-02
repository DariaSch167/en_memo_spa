import React from "react";
import "./cardLine.css";

function CardLine(props) {
  return (
    <React.Fragment>
      <div className="card__line">
        <p className="card__line__word-index">{props.index}</p>
        {props.editMode === false ? (
          <React.Fragment>
            <p className="card__line__word-en">{props.english}</p>
            <p className="card__line__word-transcription">
              {props.transcription}
            </p>
            <p className="card__line__word-ru">{props.russian}</p>
            <p className="card__line__word-tags">{props.tags}</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <input
              className="card__line__word-en"
              type="text"
              value={props.english}
            />
            <input
              className="card__line__word-transcription"
              type="text"
              value={props.transcription}
            />
            <input
              className="card__line__word-ru"
              type="text"
              value={props.russian}
            />
            <input
              className="card__line__word-tags"
              type="text"
              value={props.tags}
            />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default CardLine;
