import "./lineManageBtn.css";

function ManageButton(props) {
  return (
    <button className="table__manage-btn" id={props.id} onClick={props.handle}>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </button>
  );
}
export default ManageButton;
