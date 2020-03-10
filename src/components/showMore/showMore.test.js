import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "../showMore/showMore.jsx";

it(`Render ShowMore`, () => {
  const tree = renderer
    .create(
        <ShowMore
          onShowMoreBtnClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
