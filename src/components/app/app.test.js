import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

// Mocks
const movie = {
  title: `Fantastic Mr. Fox`,
  genre: `Animation`,
  year: 2009
};

const films = [
  {
    title: `Fight Club`,
    poster: `http://picsum.photos/id/1030/300/150`,
    id: 19,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Pulp Fiction`,
    poster: `http://picsum.photos/id/1031/300/150`,
    id: 20,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `The Godfather`,
    poster: `http://picsum.photos/id/1032/300/150`,
    id: 21,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Back to the Future`,
    poster: `http://picsum.photos/id/1033/300/150`,
    id: 22,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `The Pianist`,
    poster: `http://picsum.photos/id/1034/300/150`,
    id: 23,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

const filmsFullInfo = new Map([
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


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movie={movie}
      films={films}
      filmsFullInfo={filmsFullInfo}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
