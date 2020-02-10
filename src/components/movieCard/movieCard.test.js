import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movieCard.jsx";

// Mocks
const title = `Fantastic Mr. Fox`;

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(<MovieCard
      title={title}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
