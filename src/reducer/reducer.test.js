import {reducer, ActionType} from "./reducer.js";
import {films} from '../mocks/films.js';

const genresList = [`All genres`, ...films.map((film) => film.genre).filter((film, i, self) => self.indexOf(film) === i)];

const initialState = {
  genre: `All genres`,
  genres: genresList,
  movies: films
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should change filter value`, () => {
  expect(reducer(initialState, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `Comedy`,
  })).toEqual({
    genre: `Comedy`,
    genres: genresList,
    movies: films
  });
});

it(`Reducer should return an array of all availible movie objects`, () => {
  expect(reducer(initialState, {
    type: ActionType.GET_MOVIES,
  })).toEqual(initialState);
});

it(`Reducer should return an array of filtered movie objects with specific genre`, () => {
  expect(reducer({
    genre: `Drama`,
    genres: genresList,
    movies: films
  }, {
    type: ActionType.GET_MOVIES,
  })).toEqual({
    genre: `Drama`,
    genres: genresList,
    movies: films.filter((film) => film.genre === `Drama`)
  });
});
