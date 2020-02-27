import React from "react";
import renderer from "react-test-renderer";
import Tab from "../tab/tab.jsx";

const label = `Show more`;

it(`Render Tab`, () => {
  const tree = renderer
    .create(
        <Tab
          onClick={() => {}}
          activeTab={label}
          label={label}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
