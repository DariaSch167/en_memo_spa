import React, { useState } from "react";
import CardLine from "./CardLine.jsx";
import ManageButton from "./LineManageBtn.jsx";
import wordsJSON from "../../data/words.json";

function MainListOfCards(props) {
  const [lineMode, setLineMode] = useState("read");

  return (
    <React.Fragment>
      <div className="main__list">
        <h2>List Of Cards</h2>
        <div className="list-title">
          <CardLine
            mode="read"
            index="№"
            english="English"
            transcription="Transcription"
            russian="Russian"
            tags="Tags"
          />
        </div>
        {wordsJSON.map((item, index) => {
          return (
            <CardLine
              mode={lineMode}
              key={index}
              index={index + 1}
              english={item.english}
              transcription={item.transcription}
              russian={item.russian}
              tags={item.tags}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default MainListOfCards;
