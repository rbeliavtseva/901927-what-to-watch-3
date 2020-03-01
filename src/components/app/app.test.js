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

const review = [{
  name: `Kate Middleton`,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Placerat vestibulum lectus mauris ultrices. Ultrices dui sapien eget mi proin. Vitae auctor eu augue ut. Parturient montes nascetur ridiculus mus mauris vitae.`,
  date: `April 1, 2016`,
  rating: `10,0`,
  id: 11
}];


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movie={movie}
      films={films}
      filmsFullInfo={filmsFullInfo}
      reviews={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
