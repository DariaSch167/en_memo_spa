import React, { useState } from "react";
import CardLine from "./CardLine.jsx";
import ManageButton from "./LineManageBtn.jsx";
import wordsJSON from "../../data/words.json";
import btnEdit from "../../images/card-line__edit.svg";
import btnDel from "../../images/card-line__delete.svg";
import btnSave from "../../images/card-line__save.svg";
import btnUndo from "../../images/card-line__undo.svg";
import "./mainListOfCards.css";

function MainListOfCards(props) {
  const [editMode, setEditMode] = useState(false);
  // const [cardIndex, setCardIndex] = useState(null);

  // const handleClick = (index) => {
  //   setCardIndex(index);
  // };

  const handleChangeMode = (index) => {
    setEditMode(!editMode);
  };

  return (
    <React.Fragment>
      <main>
        <div className="main">
          <div className="main__list">
            <h2>List Of Cards</h2>
            <div className="line__list-title">
              <CardLine
                editMode={false}
                index=""
                english="English"
                transcription="Transcription"
                russian="Russian"
                tags="Tags"
              />
              <div className="list-title__btn"></div>
            </div>
            <div className="line__list-add">
              <CardLine
                editMode={true}
                index="0"
                english=""
                transcription=""
                russian=""
                tags=""
              />
              <div className="list-add__btn">
                <ManageButton imgSrc={btnUndo} imgAlt="undo" />
                <ManageButton imgSrc={btnSave} imgAlt="save" />
              </div>
            </div>
            {wordsJSON.map((item, index) => {
              return (
                <div className="line">
                  <CardLine
                    editMode={editMode}
                    key={index}
                    index={index + 1}
                    english={item.english}
                    transcription={item.transcription}
                    russian={item.russian}
                    tags={item.tags}
                  />
                  <div className="line__btn">
                    {editMode === false ? (
                      <React.Fragment>
                        <ManageButton
                          imgSrc={btnEdit}
                          imgAlt="edit"
                          onClick={handleChangeMode}
                        />
                        <ManageButton imgSrc={btnDel} imgAlt="delete" />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <ManageButton
                          imgSrc={btnUndo}
                          imgAlt="undo"
                          onClick={handleChangeMode}
                        />
                        <ManageButton imgSrc={btnSave} imgAlt="save" />
                      </React.Fragment>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainListOfCards;
