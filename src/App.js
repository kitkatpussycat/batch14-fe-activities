import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [selected, setSelected] = useState(undefined);
  const [status, setStatus] = useState("add");
  const [search, setSearch] = useState("");

  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header
        selected={selected}
        setSelected={setSelected}
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
      />
      <List
        selected={selected}
        setSelected={setSelected}
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
