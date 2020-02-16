import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {BrowserRouter} from "react-router-dom";


// Mocks
const movie = {
  title: `Fantastic Mr. Fox`,
  genre: `Animation`,
  year: 2009
};

const films = [
  {
    title: `Fight Club`,
    poster: `http://picsum.photos/id/1020/300/150`,
    id: 19
  },
  {
    title: `Pulp Fiction`,
    poster: `http://picsum.photos/id/1021/300/150`,
    id: 20
  },
  {
    title: `The Godfather`,
    poster: `http://picsum.photos/id/1022/300/150`,
    id: 21
  },
  {
    title: `Back to the Future`,
    poster: `http://picsum.photos/id/1023/300/150`,
    id: 22
  },
  {
    title: `The Pianist`,
    poster: `http://picsum.photos/id/1024/300/150`,
    id: 23
  }
];

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Main
            movie={movie}
            films={films}
            onMovieCardClick={() => {}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
