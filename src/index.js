import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const movieInfo = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

ReactDOM.render(
    <App
      movieTitle={movieInfo.NAME}
      movieGenre={movieInfo.GENRE}
      movieYear={movieInfo.YEAR}
    />,
    document.querySelector(`#root`)
);
