import React, { useState, useEffect } from "react";

function List({
  loading,
  people = [],
  setPeople,
  status,
  setStatus,
  selected,
  setSelected,
  search,
  setSearch,
  state,
  dispatch,
}) {
  const handleDelete = (e, name) => {
    setPeople(people.filter((person) => person.name !== name));
  };

  const handleEdit = (e, name) => {
    dispatch({ type: "EDIT" });
    setStatus("edit");
    setSelected(name);
    // setName(name);
  };
  const [filteredNames, setFilteredNames] = useState(people);

  useEffect(() => {
    if (search === "") {
      setFilteredNames(people);
    } else {
      setFilteredNames(
        people.filter((person) => {
          return person.name.toLowerCase().includes(search);
        })
      );
    }
  }, [people, search]);

  return (
    <div>
      <ul>
        {state.loading ? (
          <p>Loading...</p>
        ) : (
          filteredNames.map((person) => (
            <li>
              <span onClick={(e) => handleEdit(e, person.name)}>
                {person.name}
              </span>
              <button
                className="btn-blue"
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
