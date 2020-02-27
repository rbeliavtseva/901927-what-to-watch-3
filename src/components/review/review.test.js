import React from "react";
import renderer from "react-test-renderer";
import Review from "../review/review.jsx";

const review = {
  name: `Kate Middleton`,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Placerat vestibulum lectus mauris ultrices. Ultrices dui sapien eget mi proin. Vitae auctor eu augue ut. Parturient montes nascetur ridiculus mus mauris vitae.`,
  date: `April 1, 2016`,
  rating: `10,0`
};

it(`Render Review`, () => {
  const tree = renderer
    .create(
        <Review
          review={review}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
