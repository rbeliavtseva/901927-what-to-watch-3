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
    id: 19
  },
  {
    title: `Pulp Fiction`,
    poster: `http://picsum.photos/id/1031/300/150`,
    id: 20
  },
  {
    title: `The Godfather`,
    poster: `http://picsum.photos/id/1032/300/150`,
    id: 21
  },
  {
    title: `Back to the Future`,
    poster: `http://picsum.photos/id/1033/300/150`,
    id: 22
  },
  {
    title: `The Pianist`,
    poster: `http://picsum.photos/id/1034/300/150`,
    id: 23
  }
];

const movieFullInfo = {
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
  ratingCount: 200
};


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movie={movie}
      films={films}
      movieFullInfo={movieFullInfo}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
