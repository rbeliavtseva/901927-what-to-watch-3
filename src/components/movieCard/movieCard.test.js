import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movieCard.jsx";

// Mocks
const movie = {
  title: `Inception`,
  genre: `Science Fiction`,
  year: 2010
};

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={movie}
      onMovieCardHover={()=>{}}
      onMovieCardTitleClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
