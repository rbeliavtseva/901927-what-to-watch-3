import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movieCard.jsx";
import {BrowserRouter} from "react-router-dom";

// Mocks
const movie = {
  title: `Inception`,
  poster: `http://picsum.photos/id/1005/300/150`,
  id: 110
};

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MovieCard
            movie={movie}
            onMovieCardHover={()=>{}}
            onMovieCardClick={()=>{}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
