import React, { useContext } from "react";
import CardLine from "./CardLine.jsx";
import TitleLine from "./TitleLine.jsx";
import AddLine from "./AddLine.jsx";
import { APIWords } from "../WordsContext.js";
import "./mainListOfCards.css";

function MainListOfCards(props) {
  const words = useContext(APIWords);
  console.log(words);

  return (
    <React.Fragment>
      <main>
        <div className="main">
          <div className="main__list">
            <h2>List Of Cards</h2>
            <div className="list__title">
              <TitleLine />
            </div>
            <div className="list__line__add-card">
              <AddLine />
            </div>
            <div className="list__line-wrapper">
              {words.map((item, index) => {
                return (
                  <div className="list__line" key={item.id}>
                    <CardLine
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
