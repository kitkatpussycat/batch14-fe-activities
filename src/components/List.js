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
  setName,
}) {
  const handleDelete = (e, name) => {
    setPeople(people.filter((person) => person.name !== name));
  };

  const handleEdit = (e, name) => {
    dispatch({ type: "EDIT" });
    setStatus("edit");
    setSelected(name);
    setName({ name: `${name.first_name} ${name.last_name}` });
  };

  const whenSelected = (selected) => {
    if (selected) {
      const tempArr = selected.split(" ");

      if (tempArr.length < 3) {
        setName({ first_name: tempArr[0], last_name: tempArr[1] });
      } else {
        setName({
          first_name: `${tempArr[0]} ${tempArr[1]}`,
          last_name: tempArr[2],
        });
      }
    }
  };
  useEffect(() => whenSelected(state.selected), [state.selected]);

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
