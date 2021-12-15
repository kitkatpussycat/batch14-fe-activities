import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { stateContext } from "./context/StateContextProvider";
function AddEditModal({ status, selected, setSelected, setStatus }) {
  const [name, setName] = useState("");
  const { state, dispatch } = useContext(stateContext);

  const handleClose = () => {
    setName("");
    // dispatchStatus({ type: "ADD" });
    dispatch({ type: "CLOSE_MODAL" });
  };

  const onInput = (e) => {
    setName(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (status === "add") {
      dispatch({ type: "ADD_PERSON", payload: { name: name } });
      setName("");
    } else if (status === "edit") {
      setStatus("add");
    }
    setName("");
    dispatch({ type: "CLOSE_MODAL" });
  };

  return ReactDOM.createPortal(
    <div className="modalBackGround">
      <div className="modalContainer glass modalCard px-20 py-10">
        <div className="title ">
          <h1 className="dark:text-pink-600">ADD or Edit</h1>
        </div>
        <div className="body flex-col">
          <input
            className="input-style"
            type="text"
            placeholder="Add Name"
            value={name}
            onChange={(e) => {
              onInput(e);
            }}
          />
          <p>{name}</p>
        </div>
        <div className="footer">
          <button
            className="btn-gradient dark:bg-gradient-pink"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="btn-gradient dark:bg-gradient-pink"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AddEditModal;
