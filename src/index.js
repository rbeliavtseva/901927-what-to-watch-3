import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "../src/mocks/films.js";
import {movieFullInfo} from "./mocks/movieFullInfo.js";

const movieInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      movie={movieInfo}
      films={films}
      movieFullInfo={movieFullInfo}
    />,
    document.querySelector(`#root`)
);
