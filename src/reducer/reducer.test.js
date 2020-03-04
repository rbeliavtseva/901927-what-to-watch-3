import {reducer, ActionType} from "./reducer.js";
import {films} from '../mocks/films.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    genres: [`All genres`, ...films.map((film) => film.genre).filter((film, i, self) => self.indexOf(film) === i)],
    movies: films
  });
});

it(`Reducer should change filter value`, () => {
  expect(reducer({
    genre: `All genres`,
    genres: [`All genres`, ...films.map((film) => film.genre).filter((film, i, self) => self.indexOf(film) === i)],
    movies: films
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `Comedy`,
  })).toEqual({
    genre: `Comedy`,
    genres: [`All genres`, ...films.map((film) => film.genre).filter((film, i, self) => self.indexOf(film) === i)],
    movies: films
  });
});

it(`Reducer should return an array of movie objects`, () => {
  expect(reducer({
    genre: `All genres`,
    genres: [`All genres`, ...films.map((film) => film.genre).filter((film, i, self) => self.indexOf(film) === i)],
    movies: films
  }, {
    type: ActionType.GET_MOVIES,
  })).toEqual({
    genre: `All genres`,
    genres: [`All genres`, ...films.map((film) => film.genre).filter((film, i, self) => self.indexOf(film) === i)],
    movies: films
  });
});
