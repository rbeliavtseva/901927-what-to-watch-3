import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  return (
    <Main
      movie={props.movie}
      movieTitles={props.movieTitles}
    />
  );
};

App.propTypes = {
  movie: PropTypes.object.isRequired,
  movieTitles: PropTypes.array.isRequired
};

export default App;
