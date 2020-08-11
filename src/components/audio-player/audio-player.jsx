import React, {Fragment} from "react";
import PropTypes from "prop-types";


const AudioPlayer = (props) => {
  const {isLoading, isPlaying, onPlayBtnClick, children} = props;

  return (
    <Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={() => onPlayBtnClick()}
      />
      <div className="track__status">

        {children}

      </div>
    </Fragment>
  );
};

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default AudioPlayer;
