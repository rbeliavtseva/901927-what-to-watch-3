import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genresList.jsx";

const genres = [`Comedy`, `Action`, `Romance`, `Drama`];

it(`Render GenresList`, () => {
  const tree = renderer
    .create(<GenresList
      onFilterButtonClick={() => {}}
      genres={genres}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
