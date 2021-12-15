import React, { createContext, useReducer, useEffect } from "react";
import { getData } from "../Fetch/GetData";

const initialState = {
  people: [],
  count: 31,
  loading: false,
  errorMsg: "",
  openModal: false,
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
    case "OPEN_MODAL":
      return {
        openModal: true,
      };
    case "CLOSE_MODAL":
      return {
        openModal: false,
      };
    case "ADD_PERSON":
      return {
        ...state,
        people: [...state.people, action.payload],
      };

    case "EDIT_PERSON":
      return {
        ...state,
        people: state.people.map((person) => {
          return person.name === action.selected ? action.payload : person;
        }),
      };
    case "DELETE_PERSON":
      return {
        ...state,
        people: state.people.filter((i) => i.name !== action.name),
      };
    default:
      return initialState;
  }
};

export const stateContext = createContext();

function StateContextProvider(props) {
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
    <stateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </stateContext.Provider>
  );
}

export default StateContextProvider;
