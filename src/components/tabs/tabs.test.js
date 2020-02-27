import React from "react";
import renderer from "react-test-renderer";
import Tabs from "../tabs/tabs.jsx";

const label = `Show more`;

it(`Render Tabs`, () => {
  const tree = renderer
    .create(
        <Tabs
          key={label}
          onClick={() => {}}
          activeTab={label}
          label={label}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
