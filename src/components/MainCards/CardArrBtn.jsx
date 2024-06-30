import "./cardArrBtn.css";

function ArrowButton(props) {
  return (
    <button
      className="card__motion-btn"
      id={props.id}
      onClick={props.handleClick}>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </button>
  );
}
export default ArrowButton;
