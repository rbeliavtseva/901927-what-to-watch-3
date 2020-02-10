import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";


// Mocks
const movie = {
  title: `Fantastic Mr. Fox`,
  genre: `Animation`,
  year: 2009
};

const movieTitles = [`Joker`, `Once Upon a Time ...in Hollywood`, `Little Women`, `Marriage Story`];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      movie={movie}
      movieTitles={movieTitles}
      onMovieCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
