import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movieCard.jsx";
import {BrowserRouter} from "react-router-dom";

// Mocks
const movie = {
  title: `Inception`,
  poster: `http://picsum.photos/id/1005/300/150`,
  id: 110,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Animation`
};

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
  ratingCount: 199,
};

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MovieCard
            movie={movie}
            onMovieCardHover={()=>{}}
            onMovieCardClick={()=>{}}
            movieFullInfo={movieFullInfo}
            onMouseEnter={()=>{}}
            onMouseLeave={()=>{}}
            isHovered={false}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
