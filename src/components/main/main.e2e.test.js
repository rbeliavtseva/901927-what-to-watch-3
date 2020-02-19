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

const movieFullInfo = {
  title: `Isle of Dogs`,
  year: 2018,
  genre: `Animation`,
  director: `Wes Anderson`,
  starring: [`Bryan Cranston`, `Koyu Rankin`, `Edward Norton`],
  text: `An outbreak of dog flu has spread through the city of Megasaki, Japan,
        and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.
        On the island, a young boy named Atari sets out to find his lost dog,
        Spots, with the help of five other dogs... with many obstacles along the way.`,
  rating: 7.9,
  ratingLevel: `Good`,
  ratingCount: 199
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card be pressed`, () => {
  const onMovieCardClick = jest.fn();

  const main = shallow(
      <Main
        movie={movie}
        films={films}
        onMovieCardClick={onMovieCardClick}
        movieFullInfo={movieFullInfo}
      />
  );

  const movieCardTitle = main.find(`.small-movie-card__title`);

  let count = 0;

  movieCardTitle.forEach((node) => {
    node.props().onClick();
    count++;
  });

  expect(onMovieCardClick.mock.calls.length).toBe(count);
});
