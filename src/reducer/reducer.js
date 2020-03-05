import {extend} from "../utils.js";
import {films} from '../mocks/films.js';

const initialState = {
  genre: `All genres`,
  genres: [`All genres`, ...films.map((film) => film.genre).filter((film, i, self) => self.indexOf(film) === i)],
  movies: films
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: genre,
  }),
  getMovies: () => ({
    type: ActionType.GET_MOVIES,
  })
};

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  GET_MOVIES: `GET_MOVIES`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_MOVIES:
      let filteredFilms = [];

      if (state.genre === `All genres`) {
        filteredFilms = films;
      } else {
        filteredFilms = films.filter((film) => film.genre === state.genre);
      }

      return extend(state, {
        movies: filteredFilms
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
