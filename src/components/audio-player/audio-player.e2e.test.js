import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

configure({adapter: new Adapter()});

it(`Click by Play button calls callback`, () => {
  const handlePlayButtonClick = jest.fn();
  const wrapper = shallow(<AudioPlayer
    src={``}
    isLoading={false}
    isPlaying={false}
    onPlayBtnClick={handlePlayButtonClick}>
    <audio />
  </AudioPlayer>);

  wrapper.find(`.track__button`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
