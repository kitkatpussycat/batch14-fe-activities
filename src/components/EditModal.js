import React from "react";

function EditModal() {
  return ReactDOM.createPortal(
    <div className="modalBackGround">
      <div className="modalContainer glass modalCard px-20 py-10">
        <div className="title ">
          <h1 className="dark:text-pink-600">AEdit</h1>
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

export default EditModal;
