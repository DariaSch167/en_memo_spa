import "./lineManageBtn.css";

function ManageButton(props) {
  return (
    <button className="line__manage-btn" onClick={props.onClick}>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </button>
  );
}
export default ManageButton;
