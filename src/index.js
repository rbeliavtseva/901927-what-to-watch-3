import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "../src/mocks/films.js";
import {filmsFullInfo} from "./mocks/filmsFullInfo.js";

const movieInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      movie={movieInfo}
      films={films}
      filmsFullInfo={filmsFullInfo}
    />,
    document.querySelector(`#root`)
);
