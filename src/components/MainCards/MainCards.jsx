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
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  const handlePrevBtn = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setTranslateCliked(false);
      setDisabledNext(false);
    } else {
      setCardIndex(cardIndex);
      setDisabledPrev(true);
    }
  };

  const handleNextBtn = () => {
    if (cardIndex < numOfCards - 1) {
      setCardIndex(cardIndex + 1);
      setTranslateCliked(false);
      setDisabledPrev(false);
    } else {
      setCardIndex(cardIndex);
      setDisabledNext(true);
    }
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
            disabled={disabledPrev}
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
            disabled={disabledNext}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default MainCards;
