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
}) {
  const handleDelete = (e, name) => {
    setPeople(people.filter((person) => person.name !== name));
  };

  const handleEdit = (e, name) => {
    setStatus("edit");
    setSelected(name);
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
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredNames.map((person) => (
            <li>
              <span onClick={(e) => handleEdit(e, person.name)}>
                {person.name}
              </span>
              <button onClick={(e) => handleDelete(e, person.name)}>
                delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default List;
