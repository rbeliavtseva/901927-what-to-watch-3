import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./moviesList.jsx";
import {BrowserRouter} from "react-router-dom";

// Mocks
const films = [
  {
    title: `Fight Club`,
    poster: `http://picsum.photos/id/1010/300/150`,
    id: 19
  },
  {
    title: `Pulp Fiction`,
    poster: `http://picsum.photos/id/1011/300/150`,
    id: 20
  },
  {
    title: `The Godfather`,
    poster: `http://picsum.photos/id/1012/300/150`,
    id: 21
  },
  {
    title: `Back to the Future`,
    poster: `http://picsum.photos/id/1013/300/150`,
    id: 22
  },
  {
    title: `The Pianist`,
    poster: `http://picsum.photos/id/1014/300/150`,
    id: 23
  }
];

it(`Render MoviesList`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MoviesList
            films={films}
            onMovieCardHover={()=>{}}
            onMovieCardClick={()=>{}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
