import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const titleClickHandler = () => {};

const App = (props) => {
  return (
    <Main
      movie={props.movie}
      films={props.films}
      onMovieCardTitleClick={titleClickHandler}
    />
  );
};

App.propTypes = {
  movie: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    id: PropTypes.number
  })).isRequired
};

export default App;
