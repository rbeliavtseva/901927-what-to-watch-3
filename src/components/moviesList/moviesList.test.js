import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./moviesList.jsx";
import {BrowserRouter} from "react-router-dom";

// Mocks
const films = [
  {
    title: `Fight Club`,
    poster: `http://picsum.photos/id/1010/300/150`,
    id: 19,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Pulp Fiction`,
    poster: `http://picsum.photos/id/1011/300/150`,
    id: 20,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `The Godfather`,
    poster: `http://picsum.photos/id/1012/300/150`,
    id: 21,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Back to the Future`,
    poster: `http://picsum.photos/id/1013/300/150`,
    id: 22,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `The Pianist`,
    poster: `http://picsum.photos/id/1014/300/150`,
    id: 23,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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

it(`Render MoviesList`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MoviesList
            films={films}
            onMovieCardHover={()=>{}}
            onMovieCardClick={()=>{}}
            movieFullInfo={movieFullInfo}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
