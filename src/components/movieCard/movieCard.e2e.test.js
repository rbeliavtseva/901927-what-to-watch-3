import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movieCard.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = {
  title: `Inception`,
  poster: `http://picsum.photos/id/1019/300/150`,
  id: 25,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const movieFullInfo = new Map([
  [6,
    {
      title: `Isle of Dogs`,
      year: 2018,
      genre: `Animation`,
      director: `Wes Anderson`,
      starring: [`Bryan Cranston`, `Koyu Rankin`, `Edward Norton`],
      text: `An outbreak of dog flu has spread through the city of Megasaki, Japan,
            and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.
            On the island, a young boy named Atari sets out to find his lost dog,
            Spots, with the help of five other dogs... with many obstacles along the way.`,
      poster: `http://picsum.photos/id/131/250/350`,
      backgroundPoster: `http://picsum.photos/id/131/1500/500`,
      rating: 7.9,
      ratingLevel: `Good`,
      ratingCount: 199
    }
  ]
]);

const mockEvent = {
  preventDefault() {}
};

it(`Hover on movie card should pass to the callback data-object from which this card was created`, () => {
  const onMovieCardHover = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieCardClick={() => {}}
        onMovieCardHover={onMovieCardHover}
        movieFullInfo={movieFullInfo}
      />
  );

  movieCard.simulate(`mouseenter`, mockEvent);

  expect(onMovieCardHover).toHaveBeenCalledTimes(1);

  expect(onMovieCardHover.mock.calls[0][0]).toMatchObject(movie);
});

it(`Click om movie card should return fullMovieInfo data-object`, () => {
  const onMovieCardClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieCardClick={onMovieCardClick}
        onMovieCardHover={() => {}}
        movieFullInfo={movieFullInfo}
      />
  );

  const movieCardTitle = movieCard.find(`.small-movie-card__title`);

  let count = 0;

  movieCardTitle.forEach((node) => {
    node.props().onClick();
    count++;
  });

  expect(onMovieCardClick.mock.calls.length).toBe(count);
  expect(onMovieCardClick.mock.calls).toMatchObject(movieFullInfo);
});
