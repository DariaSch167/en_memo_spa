function MenuElement(props) {
  return (
    <div className="header__menu-elem">
      <img src={props.img} alt={props.name} />
    </div>
  );
}
export default MenuElement;
