import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

// Mocks
const movie = {
  title: `Fantastic Mr. Fox`,
  genre: `Animation`,
  year: 2009
};

const movieTitles = [`Joker`, `Once Upon a Time ...in Hollywood`, `Little Women`, `Marriage Story`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card title be pressed`, () => {
  const onMovieCardTitleClick = jest.fn();

  const main = mount(
      <Main
        movie={movie}
        movieTitles={movieTitles}
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
