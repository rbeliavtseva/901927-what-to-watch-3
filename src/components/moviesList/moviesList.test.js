import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./moviesList.jsx";

// Mocks
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
