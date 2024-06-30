import "./cardArrBtn.css";

function ArrowButton(props) {
  return (
    <button className="card__motion-btn" id={props.id}>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </button>
  );
}
export default ArrowButton;
