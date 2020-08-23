import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const WinScreen = (props) => {
  const {questionCount, mistakeCount, onReplayBtnClick} = props;
  const correctQuestionCount = questionCount - mistakeCount;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {correctQuestionCount} вопросов и
        совершили {mistakeCount} ошибки</p>
      <Link
        className="replay"
        to={AppRoute.ROOT}
        onClick={onReplayBtnClick}
      >
        Сыграть ещё раз
      </Link>
    </section>
  );
};

WinScreen.propTypes = {
  questionCount: PropTypes.number.isRequired,
  mistakeCount: PropTypes.number.isRequired,
  onReplayBtnClick: PropTypes.func.isRequired,
};

export default WinScreen;
