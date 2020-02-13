import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";


// Mocks
const movie = {
  title: `Fantastic Mr. Fox`,
  genre: `Animation`,
  year: 2009
};

const films = [
  {
    title: `Fight Club`,
    poster: `http://picsum.photos/300/150?r=${Math.random()}`,
    id: 19
  },
  {
    title: `Pulp Fiction`,
    poster: `http://picsum.photos/300/150?r=${Math.random()}`,
    id: 20
  },
  {
    title: `The Godfather`,
    poster: `http://picsum.photos/300/150?r=${Math.random()}`,
    id: 21
  },
  {
    title: `Back to the Future`,
    poster: `http://picsum.photos/300/150?r=${Math.random()}`,
    id: 22
  },
  {
    title: `The Pianist`,
    poster: `http://picsum.photos/300/150?r=${Math.random()}`,
    id: 23
  }
];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      movie={movie}
      films={films}
      onMovieCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
