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
