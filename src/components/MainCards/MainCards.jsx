import React, { useState, useEffect, useRef } from "react";
import Card from "./Card.jsx";
import ArrowButton from "./CardArrBtn.jsx";
import "./mainCards.css";
import prevArrow from "../../images/card_prev-arrow.svg";
import nextArrow from "../../images/card_next-arrow.svg";
import resultBtn from "../../images/card_result-alert.svg";
import wordsJSON from "../../data/words.json";

function MainCards() {
  const numOfCards = wordsJSON.length;

  const [cardIndex, setCardIndex] = useState(0);
  const [showedTranslation, setShowedTranslation] = useState(0);
  const [translateClicked, setTranslateCliked] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  const handlePrevBtn = () => {
    if (cardIndex > 1) {
      setCardIndex(cardIndex - 1);
      setTranslateCliked(false);
      setDisabledNext(false);
    } else {
      setCardIndex(cardIndex - 1);
      setDisabledPrev(true);
    }
  };

  const handleNextBtn = () => {
    if (cardIndex < numOfCards - 2) {
      setCardIndex(cardIndex + 1);
      setTranslateCliked(false);
      setDisabledPrev(false);
    } else {
      setCardIndex(cardIndex + 1);
      setDisabledNext(true);
    }
  };

  const handleShowTranslate = () => {
    setTranslateCliked(!translateClicked);
    setShowedTranslation(showedTranslation + 1);
  };

  let alertEnding =
    (showedTranslation > 11) & (showedTranslation < 15)
      ? " раз"
      : showedTranslation % 10 === 2
      ? " раза"
      : showedTranslation % 10 === 3
      ? " раза"
      : showedTranslation % 10 === 4
      ? " раза"
      : " раз";

  const handleResultClick = () => {
    alert("Кликнули на кнопку перевода: " + showedTranslation + alertEnding);
    let resultConfirm = window.confirm("Начать сначала?");
    if (resultConfirm) {
      window.location.reload();
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, [cardIndex]);

  return (
    <React.Fragment>
      <main>
        <div className="main">
          <div className="main__card">
            <div className="card__num">
              <h2>
                Flashcards {cardIndex + 1} / {numOfCards}
              </h2>
            </div>
            <div className="card__wrapper">
              {cardIndex === numOfCards - 1 ? (
                <ArrowButton
                  id="card-result"
                  imgSrc={resultBtn}
                  imgAlt="result"
                  handleClick={handleResultClick}
                />
              ) : (
                <ArrowButton
                  id="card-prev"
                  imgSrc={prevArrow}
                  imgAlt="prev"
                  handleClick={handlePrevBtn}
                  disabled={disabledPrev}
                />
              )}
              <Card
                english={wordsJSON[cardIndex].english}
                transcription={wordsJSON[cardIndex].transcription}
                russian={wordsJSON[cardIndex].russian}
                tags={wordsJSON[cardIndex].tags}
                translateClicked={translateClicked}
                handleShowTranslate={handleShowTranslate}
                btnRef={ref}
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
        </div>
      </main>
    </React.Fragment>
  );
}
export default MainCards;
