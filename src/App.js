import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import axios from "axios";

function App() {
  const API_URL = "https://swapi.dev/api";
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(31);
  const [selected, setSelected] = useState(undefined);
  const [status, setStatus] = useState("add");
  const [search, setSearch] = useState("");

  const getData = async (persons = 30) => {
    let p = [];
    let number_of_fetch = persons / 10;

    for (let i = 1; i <= number_of_fetch; i++) {
      if (i === 1) {
        setLoading(true);
        const response = await axios.get(`${API_URL}/people`);
        response.data.results.map((result) => p.push(result));
        setLoading(false);
      } else {
        setLoading(true);
        const response = await axios.get(`${API_URL}/people/?page=${i}`);
        response.data.results.map((result) => p.push(result));
        setLoading(false);
        console.log(p);
      }
    }
    setPeople(p);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header
        people={people}
        setPeople={setPeople}
        count={count}
        setCount={setCount}
        selected={selected}
        setSelected={setSelected}
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
      />
      <List
        people={people}
        setPeople={setPeople}
        loading={loading}
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
