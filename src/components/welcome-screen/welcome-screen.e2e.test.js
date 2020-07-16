import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome btn be pressed`, () => {
  const onWelcomeBtnClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorCount={3}
        onWelcomeBtnClick={onWelcomeBtnClick}
      />
  );

  const welcomeBtn = welcomeScreen.find(`button.welcome__button`);

  welcomeBtn.props().onClick();

  expect(onWelcomeBtnClick.mock.calls.length).toBe(1);
});
