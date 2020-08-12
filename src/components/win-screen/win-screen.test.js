import React from "react";
import renderer from "react-test-renderer";
import WinScreen from "./win-screen.jsx";

describe(`Should WinScreen render correctly`, () => {
  describe(`With 3 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(<WinScreen
          questionCount={3}
          mistakeCount={0}
          onReplayBtnClick={() => {}}
        />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(<WinScreen
          questionCount={3}
          mistakeCount={1}
          onReplayBtnClick={() => {}}
        />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`With 2 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(<WinScreen
          questionCount={2}
          mistakeCount={0}
          onReplayBtnClick={() => {}}
        />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(<WinScreen
          questionCount={2}
          mistakeCount={1}
          onReplayBtnClick={() => {}}
        />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
