import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./moviesList.jsx";

// Mocks
const films = [
  {
    title: `Fight Club`,
    genre: `Thriller`,
    year: 1999
  },
  {
    title: `Pulp Fiction`,
    genre: `Thriller`,
    year: 1994
  },
  {
    title: `The Godfather`,
    genre: `Drama`,
    year: 1972
  },
  {
    title: `Back to the Future`,
    genre: `Science Fiction`,
    year: 1985
  },
  {
    title: `The Pianist`,
    genre: `Drama`,
    year: 2002
  }
];

it(`Render MoviesList`, () => {
  const tree = renderer
    .create(<MoviesList
      films={films}
      onMovieCardHover={()=>{}}
      onMovieCardTitleClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
