import React from "react";
import CardLine from "./CardLine.jsx";
import LineElemRead from "./LineElemRead.jsx";
import LineElemEdit from "./LineElemEdit.jsx";
import ManageButton from "./LineManageBtn.jsx";
import wordsJSON from "../../data/words.json";
import btnAdd from "../../images/card-line__save.svg";
import btnClear from "../../images/card-line__undo.svg";
import "./mainListOfCards.css";

function MainListOfCards() {
  return (
    <React.Fragment>
      <main>
        <div className="main">
          <div className="main__list">
            <h2>List Of Cards</h2>
            <div className="list__title">
              <LineElemRead
                className="title__names"
                index=""
                english="English"
                transcription="Transcription"
                russian="Russian"
                tags="Tags"
              />
              <div className="title__btn">Actions</div>
            </div>
            <div className="list__line__add-card">
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
            </div>
            <div className="list__line-wrapper">
              {wordsJSON.map((item, index) => {
                return (
                  <div className="list__line">
                    <CardLine
                      key={item.id}
                      index={index + 1}
                      english={item.english}
                      transcription={item.transcription}
                      russian={item.russian}
                      tags={item.tags}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainListOfCards;
