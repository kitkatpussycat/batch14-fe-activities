import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AddEditModal from "./AddEditModal";
import { stateContext } from "./context/StateContextProvider";
function Header({
  status,
  setStatus,
  selected,
  setSelected,
  search,
  setSearch,
}) {
  // const API_URL = "https://swapi.dev/api";
  // const fetch = async () => {
  //   const data = await axios.get(`${API_URL}/people/${count + 1}`);

  //   setPeople([...people, data.data]);
  //   setCount((count) => count + 1);
  // };

  const [name, setName] = useState("");
  // const [openModal, setOpenModal] = useState(false);

  // const onInput = (e) => {
  //   setName(e.target.value);
  // };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  // const addNameBtn = (e) => {
  //   e.preventDefault();

  //   if (status === "add") {
  //     setPeople([...people, { name: name }]);
  //     setName("");
  //   } else if (status === "edit") {
  //     setPeople(
  //       people.map((person) => {
  //         return person.name === selected ? { name: name } : person;
  //       })
  //     );
  //     setStatus("add");
  //   }
  //   setName("");
  // };

  useEffect(() => setName(selected), [selected]);
  console.log(name);

  const { state, dispatch } = useContext(stateContext);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-300 to-indigo-700 h-20 flex justify-center items-center mb-6">
        <h1>Fetch Exercise</h1>
      </div>
      <div>
        {/* <input
          className="input-style"
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => {
            onInput(e);
          }}
        /> */}
        <input
          className="input-style"
          type="text"
          placeholder="search"
          value={name}
          onChange={(e) => {
            onSearch(e);
          }}
        />
        <p>{status}</p>
      </div>
      <div>
        <button className="btn-gradient" onClick={(e) => fetch(e)}>
          Fetch
        </button>
        <button
          className="btn-gradient"
          onClick={() => dispatch({ type: "OPEN_MODAL" })}
        >
          Add
        </button>
        {state.openModal && (
          <AddEditModal
            setStatus={setStatus}
            status={status}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
