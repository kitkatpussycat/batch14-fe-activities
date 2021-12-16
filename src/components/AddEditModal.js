import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

function AddEditModal({
  status,
  selected,
  setSelected,
  setStatus,
  dispatch,
  setPeople,
  people,
  name = [],
  setName,
  state,
}) {
  // const [name, setName] = useState({ first_name: "", last_name: "" });

  const handleClose = () => {
    setName("");
    // dispatchStatus({ type: "ADD" });
    dispatch({ type: "CLOSE_MODAL" });
  };

  // const onInput = (e) => {
  //   setName(e.target.value);
  // };

  const handleAdd = (e) => {
    e.preventDefault();
    if (name.last_name === "") {
      setName({
        first_name: name.first_name,
        last_name: "robot",
      });
    } else if (status === "add") {
      setPeople([...people, { name: `${name.first_name} ${name.last_name}` }]);
      setName("");
    } else if (status === "edit") {
      setPeople(
        people.map((person) => {
          return person.name === selected
            ? { name: `${name.first_name} ${name.last_name}` }
            : person;
        })
      );
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
            className="input-style w-full"
            type="text"
            placeholder="Add Name"
            value={name.first_name}
            onChange={(e) => setName({ ...name, first_name: e.target.value })}
          />
          <input
            className="input-style w-full"
            type="text"
            placeholder="Add Name"
            value={name.last_name}
            onChange={(e) => setName({ ...name, last_name: e.target.value })}
          />
          <p>{name.first_name}</p>
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
