import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

import axios from "axios";

const initialState = {
  people: [],
  count: 31,
  loading: false,
  errorMsg: "",
  openModal: false,
  status: "add",
  selected: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING_START":
      return {
        ...state,
        errorMsg: "",
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        people: action.payload,
        errorMsg: "",
        loading: false,
      };
    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to connect to the server",
      };
    // case "OPEN_MODAL":
    //   return {
    //     openModal: true,
    //   };
    // case "CLOSE_MODAL":
    //   return {
    //     openModal: false,
    //   };
    // case "ADD_PERSON":
    //   return {
    //     ...state,
    //     errorMsg: "",
    //     people: [...state.people, action.payload],
    //   };
    // case "EDIT_PERSON":
    //   return {
    //     ...state,
    //     errorMsg: "",
    //     people: state.people.map((user) => {
    //       return user.name === action.name ? action.payload : user;
    //     }),
    //   };
    case "EDIT":
      return {
        status: "edit",
        selected: action.payload,
        openModal: true,
      };
    case "ADD":
      return {
        status: "add",
        selected: "",
        openModal: true,
      };
    default:
      return initialState;
  }
};

function App() {
  // const API_URL = "https://swapi.dev/api";
  const API_URL = "https://swapi.py4e.com/api";
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(31);
  const [selected, setSelected] = useState(undefined);
  const [status, setStatus] = useState("add");
  const [search, setSearch] = useState("");
  const [name, setName] = useState({ first_name: "", last_name: "" });

  const getData = async (persons = 30) => {
    let p = [];
    let number_of_fetch = persons / 10;
    let error = 0;
    try {
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
    } catch (e) {
      error = 1;
    }
    return [people, error];
  };

  useEffect(() => {
    getData();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING_START" });
      const [data, error] = await getData();
      if (error === 1) {
        dispatch({ type: "FETCH_FAIL" });
      } else {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      }
    })();
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
        state={state}
        dispatch={dispatch}
        name={name}
        setName={setName}
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
        state={state}
        dispatch={dispatch}
        name={name}
        setName={setName}
      />
    </div>
  );
}

export default App;
