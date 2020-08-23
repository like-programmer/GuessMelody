import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen.jsx";


const noop = () => {};

it(`AuthScreen component render correctly`, () => {
  const tree = renderer.create(
      <AuthScreen
        onReplayBtnClick={noop}
        onSubmit={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
