import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const movieInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      movie={movieInfo}
    />,
    document.querySelector(`#root`)
);
