import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

// Mocks
const movie = {
  title: `Fantastic Mr. Fox`,
  genre: `Animation`,
  year: 2009
};

const movieTitles = [`Joker`, `Once Upon a Time ...in Hollywood`, `Little Women`, `Marriage Story`];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movie={movie}
      movieTitles={movieTitles}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
