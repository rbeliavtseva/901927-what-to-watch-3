import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "../src/mocks/films.js";
import {filmsFullInfo} from "./mocks/filmsFullInfo.js";
import {reviews} from "./mocks/reviews.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer.js";

const movieInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        movie={movieInfo}
        films={films}
        filmsFullInfo={filmsFullInfo}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
