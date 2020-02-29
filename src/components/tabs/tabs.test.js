import React from "react";
import renderer from "react-test-renderer";
import Tabs from "../tabs/tabs.jsx";

it(`Render Tabs`, () => {
  const tree = renderer
    .create(
        <Tabs
          key={0}
          onClick={() => {}}
          activeIndex={0}
        >
          <div>
            Child1
          </div>
          <div>
            Child2
          </div>
        </Tabs>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
