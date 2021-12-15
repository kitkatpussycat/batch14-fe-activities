import React, { useState, useEffect, useContext } from "react";
import AddEditModal from "./AddEditModal";
import { stateContext } from "./context/StateContextProvider";

function List({ status, setStatus, selected, setSelected, search, setSearch }) {
  const { state, dispatch } = useContext(stateContext);

  const handleDelete = (e, name) => {
    dispatch({ type: "DELETE_PERSON", action: name });
  };

  // const handleEdit = (e, name) => {
  //   setStatus("edit");
  //   setSelected(name);
  // };
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    if (search === "") {
      setFilteredNames(state.people);
    } else {
      setFilteredNames(
        state.people.filter((person) => {
          return person.name.toLowerCase().includes(search);
        })
      );
    }
  }, [state.people, search]);

  return (
    <div>
      <ul>
        {state.loading ? (
          <p>Loading...</p>
        ) : (
          filteredNames.map((person) => (
            <li>
              <span onClick={() => dispatch({ type: "OPEN_MODAL" })}>
                {person.name}
              </span>
              {state.openModal && <AddEditModal />}
              <button
                className="btn-gradient"
                onClick={(e) => handleDelete(e, person.name)}
              >
                delete
              </button>
            </li>
          ))
        )}
      </ul>
      {state.errorMsg && (
        <h1 className="text-center text-lg text-red-500">{state.errorMsg}</h1>
      )}
    </div>
  );
}

export default List;
