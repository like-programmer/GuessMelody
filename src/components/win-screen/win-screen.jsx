import React from "react";
import PropTypes from "prop-types";

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
      <button
        className="replay"
        type="button"
        onClick={onReplayBtnClick}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};

WinScreen.propTypes = {
  questionCount: PropTypes.number.isRequired,
  mistakeCount: PropTypes.number.isRequired,
  onReplayBtnClick: PropTypes.func.isRequired,
};

export default WinScreen;
