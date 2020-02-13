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
  id: 25
};

const mockEvent = {
  preventDefault() {}
};

it(`Hover on movie card should pass to the callback data-object from which this card was created`, () => {
  const onMovieCardHover = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieCardTitleClick={() => {}}
        onMovieCardHover={onMovieCardHover}
      />
  );

  movieCard.simulate(`mouseenter`, mockEvent);

  expect(onMovieCardHover).toHaveBeenCalledTimes(1);

  expect(onMovieCardHover.mock.calls[0][0]).toMatchObject(movie);
});
