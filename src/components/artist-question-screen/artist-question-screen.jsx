import React from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const.js";

export const ArtistQuestionScreen = (props) => {
  return ();
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([GameType.GENRE, GameType.ARTIST]).isRequired,
  }).isRequired,
};
