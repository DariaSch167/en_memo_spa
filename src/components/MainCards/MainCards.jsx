import React, { useState } from "react";
import Card from "./Card.jsx";
import ArrowButton from "./CardArrBtn.jsx";
import "./mainCards.css";
import prevArrow from "../../images/card_prev-arrow.svg";
import nextArrow from "../../images/card_next-arrow.svg";
import wordsJSON from "../../data/words.json";

function MainCards() {
  const numOfCards = wordsJSON.length;

  const [cardIndex, setCardIndex] = useState(0);
  const [translateClicked, setTranslateCliked] = useState(false);

  const handlePrevBtn = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setTranslateCliked(false);
    } else setCardIndex(cardIndex);
  };

  const handleNextBtn = () => {
    if (cardIndex < numOfCards - 1) {
      setCardIndex(cardIndex + 1);
      setTranslateCliked(false);
    } else setCardIndex(cardIndex);
  };

  const handleShowTranslate = () => {
    setTranslateCliked(!translateClicked);
  };

  return (
    <React.Fragment>
      <div className="main__card">
        <div className="card__num">
          <h2>
            Flashcards {cardIndex + 1} / {numOfCards}
          </h2>
        </div>
        <div className="card__wrapper">
          <ArrowButton
            id="card-prev"
            imgSrc={prevArrow}
            imgAlt="prev"
            handleClick={handlePrevBtn}
          />
          <Card
            english={wordsJSON[cardIndex].english}
            transcription={wordsJSON[cardIndex].transcription}
            russian={wordsJSON[cardIndex].russian}
            tags={wordsJSON[cardIndex].tags}
            translateClicked={translateClicked}
            handleShowTranslate={handleShowTranslate}
          />
          <ArrowButton
            id="card-next"
            imgSrc={nextArrow}
            imgAlt="next"
            handleClick={handleNextBtn}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default MainCards;
