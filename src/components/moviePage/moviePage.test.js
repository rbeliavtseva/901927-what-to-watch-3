import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./moviePage.jsx";

// Mocks
const movie = {
  title: `Fantastic Mr. Fox`,
  year: 2009,
  genre: `Animation`,
  director: `Wes Anderson`,
  starring: [`George Clooney`, `Meryl Streep`, `Bill Murray`],
  text: `This is the story of Mr. Fox (George Clooney) and his wild ways of hen heckling, turkey taking,
        and cider sipping, nocturnal, instinctive adventures. He has to put his wild days behind him and do what
        fathers do best: be responsible. He is too rebellious. He is too wild. He is going to try "just one more raid"
        on the three nastiest, meanest farmers that are Walter Boggis (Robin Hurlstone), Nathan Bunce (Hugo Guinness),
        and Franklin Bean (Sir Michael Gambon). It is a tale of crossing the line of family responsibilities and midnight
        adventure and the friendships and awakenings of this country life that is inhabited by Fantastic Mr. Fox and his friends.`,
  rating: 7.8,
  ratingLevel: `Good`,
  ratingCount: 200,
  runTime: `2h 20min`
};

const review = [{
  name: `Kate Middleton`,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Placerat vestibulum lectus mauris ultrices. Ultrices dui sapien eget mi proin. Vitae auctor eu augue ut. Parturient montes nascetur ridiculus mus mauris vitae.`,
  date: `April 1, 2016`,
  rating: `10,0`,
  id: 11
}];

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

it(`Render MoviePage`, () => {
  const tree = renderer
    .create(<MoviePage
      movieFullInfo={movie}
      reviews={review}
      onMovieCardClick={() => {}}
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
