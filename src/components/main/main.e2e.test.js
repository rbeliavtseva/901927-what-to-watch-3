import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card title be pressed`, () => {
  const onMovieCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        movie={movie}
        films={films}
        onMovieCardTitleClick={onMovieCardTitleClick}
      />
  );

  const movieCardTitle = main.find(`.small-movie-card__title`);

  let count = 0;

  movieCardTitle.forEach((node) => {
    node.props().onClick();
    count++;
  });

  expect(onMovieCardTitleClick.mock.calls.length).toBe(count);
});
