import React, { useState } from "react";
import LineElemRead from "./LineElemRead.jsx";
import LineElemEdit from "./LineElemEdit.jsx";
import ManageButton from "./LineManageBtn.jsx";
import "./cardLine.css";
import btnEdit from "../../images/card-line__edit.svg";
import btnDel from "../../images/card-line__delete.svg";
import btnSave from "../../images/card-line__save.svg";
import btnUndo from "../../images/card-line__undo.svg";

function CardLine(props) {
  const [editMode, setEditMode] = useState(false);
  const [saveBtnDisable, setSaveBtnDisable] = useState(false);

  const handleChangeMode = () => {
    setEditMode(!editMode);
  };

  const handleEditMode = () => {
    setEditMode(true);
    setSaveBtnDisable(true);
  };

  // Тестоввый обработчик тестового инпута:
  const [testValue, setTestValue] = useState("hi");
  const handleChangeTest = (value) => {
    setTestValue(value);
    console.log(testValue);
  };

  return (
    <React.Fragment>
      {editMode === false ? (
        <React.Fragment>
          <LineElemRead {...props} className="list__line-read" />
          <div className="line__read-btn">
            <ManageButton
              imgSrc={btnEdit}
              imgAlt="edit"
              onClick={handleEditMode}
            />
            <ManageButton
              imgSrc={btnDel}
              imgAlt="delete"
              // onClick={() => props.lineDelete()}
            />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <LineElemEdit
            {...props}
            className="list__line-edit"
            // Тестовый инпут:
            test={testValue}
            handleChangeTest={handleChangeTest}
          />
          <div className="line__edit-btn">
            <ManageButton
              imgSrc={btnUndo}
              imgAlt="undo"
              onClick={handleChangeMode}
            />
            <ManageButton
              imgSrc={btnSave}
              imgAlt="save"
              disabled={saveBtnDisable}
              // onClick={() => props.lineSave()}
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default CardLine;
