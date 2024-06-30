import React from "react";
import Card from "./Card.jsx";
import ArrowButton from "./CardArrBtn.jsx";
import "./mainCards.css";
import prevArrow from "../../images/card_prev-arrow.svg";
import nextArrow from "../../images/card_next-arrow.svg";
// import wordsJSON from "../../data/words.json";

function MainCards() {
  return (
    <React.Fragment>
      <div className="main__card">
        <div className="card__num">
          <h2>
            Flashcards <span id="card__num-title">1</span> / 15
          </h2>
        </div>
        <div className="card__wrapper">
          <ArrowButton id="card-prev" imgSrc={prevArrow} imgAlt="prev" />
          <Card
            english="basket"
            transcription="[ˈbɑːskɪt]"
            russian="корзина"
            tags="предмет"
          />
          <ArrowButton id="card-next" imgSrc={nextArrow} imgAlt="next" />
        </div>
      </div>
    </React.Fragment>
  );
}
export default MainCards;
