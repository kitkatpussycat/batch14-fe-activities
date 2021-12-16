import React, { useState, useEffect } from "react";
import axios from "axios";
import AddEditModal from "../components/AddEditModal";

function Header({
  people,
  setPeople,
  count,
  setCount,
  status,
  setStatus,
  selected,
  setSelected,
  search,
  setSearch,
  state,
  dispatch,
}) {
  // const API_URL = "https://swapi.dev/api";
  const API_URL = "https://swapi.py4e.com/api";
  const fetch = async () => {
    const data = await axios.get(`${API_URL}/people/${count + 1}`);

    setPeople([...people, data.data]);
    setCount((count) => count + 1);
  };

  const [name, setName] = useState("");

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

  return (
    <div>
      <h1>Fetch Exercise</h1>
      <div>
        {/* <input
          className="input-style"
          type="text"
          value={name}
          onChange={(e) => {
            onInput(e);
          }}
        /> */}
        <input
          className="input-style"
          type="text"
          placeholder="search"
          // value={name}
          onChange={(e) => {
            onSearch(e);
          }}
        />
        <p>{status}</p>
      </div>
      <div>
        <button className="btn-blue" onClick={(e) => fetch(e)}>
          Fetch
        </button>
        <button className="btn-blue" onClick={() => dispatch({ type: "ADD" })}>
          Add
        </button>
        {state.openModal && (
          <AddEditModal
            people={people}
            setPeople={setPeople}
            selected={selected}
            setSelected={setSelected}
            status={status}
            setStatus={setStatus}
            search={search}
            setSearch={setSearch}
            state={state}
            dispatch={dispatch}
            name={name}
            setName={setName}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
