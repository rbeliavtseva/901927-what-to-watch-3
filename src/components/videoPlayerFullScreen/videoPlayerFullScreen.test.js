import React from "react";
import renderer from "react-test-renderer";
import VideoPlayerFullScreen from "./videoPlayerFullScreen.jsx";

const movie = {
  title: `Fight Club`,
  poster: `http://picsum.photos/id/1020/300/150`,
  id: 19,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Drama`,
  year: 1999,
  fullMovie: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`Render VideoPlayerFullScreen`, () => {
  const tree = renderer
    .create(<VideoPlayerFullScreen
      onFullScreenClose={() => {}}
      movie={movie}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

