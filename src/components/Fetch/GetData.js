import axios from "axios";

const API_URL = "https://swapi.dev/api";

export const getData = async (persons = 30) => {
  let p = [];
  let number_of_fetch = persons / 10;
  let error = 0;
  try {
    for (let i = 1; i <= number_of_fetch; i++) {
      if (i === 1) {
        const response = await axios.get(`${API_URL}/people`);
        response.data.results.map((result) => p.push(result));
      } else {
        const response = await axios.get(`${API_URL}/people/?page=${i}`);
        response.data.results.map((result) => p.push(result));

        console.log(p);
      }
    }
  } catch (e) {
    error = 1;
  }
  return [p, error];
};
