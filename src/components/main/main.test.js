import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "../../reducer/reducer.js";

// Mocks
const movie = {
  title: `Fantastic Mr. Fox`,
  poster: `http://picsum.photos/id/1018/1920/1080`,
  id: 100,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Animation`,
  year: 2009,
  fullMovie: `https://www.videvo.net/videvo_files/converted/2013_08/preview/HarryTimer1.mov84033.webm`
};

const films = [
  {
    title: `Fight Club`,
    poster: `http://picsum.photos/id/1020/300/150`,
    id: 19,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
  },
  {
    title: `Pulp Fiction`,
    poster: `http://picsum.photos/id/1021/300/150`,
    id: 20,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Triller`,
  },
  {
    title: `The Godfather`,
    poster: `http://picsum.photos/id/1022/300/150`,
    id: 21,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
  },
  {
    title: `Back to the Future`,
    poster: `http://picsum.photos/id/1023/300/150`,
    id: 22,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Science Fiction`,
  },
  {
    title: `The Pianist`,
    poster: `http://picsum.photos/id/1024/300/150`,
    id: 23,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
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

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Main
              movie={movie}
              films={films}
              onMovieCardClick={() => {}}
              movieFullInfo={movieFullInfo}
            />
          </Provider>

        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
