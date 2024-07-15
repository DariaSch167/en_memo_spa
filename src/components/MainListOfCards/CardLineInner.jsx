import React from "react";
import LineElemEdit from "./LineElemEdit";
import LineElemRead from "./LineElemRead";
import ManageButton from "./LineManageBtn";

import btnSave from "../../images/card-line__save.svg";
import btnUndo from "../../images/card-line__undo.svg";
import btnEdit from "../../images/card-line__edit.svg";
import btnDel from "../../images/card-line__delete.svg";

const CardLineInner = (props) => {
  return (
    <>
      {props.edit ? (
        <LineElemEdit className="list__line-edit" {...props} />
      ) : (
        <LineElemRead className="list__line-read" {...props} />
      )}
      <div className="line__read-btn">
        <ManageButton
          imgSrc={props.edit ? btnUndo : btnEdit}
          imgAlt={props.edit ? "undo" : "edit"}
          onClick={
            props.edit
              ? () => props.handleUndoBtn()
              : () => props.handleEditBtn()
          }
        />
        <ManageButton
          imgSrc={props.edit ? btnSave : btnDel}
          imgAlt={props.edit ? "save" : "delete"}
          disabled={props.edit ? props.disabledSave : props.disabledDelete}
          onClick={
            props.edit ? () => props.handleSave() : () => props.handleDelete()
          }
        />
      </div>
    </>
  );
};

export default CardLineInner;
