import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import GenreQuestionItem from "../genre-question-item/genre-question-item";
import {GameType} from "../../const.js";


class GenreQuestionScreen extends PureComponent {
  render() {
    const {
      renderPlayer,
      userAnswers,
      question,
      onAnswer,
      onChange,
    } = this.props;

    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>

        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}
        >
          {answers.map((answer, i) => (
            <GenreQuestionItem
              key={`${i}-${answer.src}`}
              id={i}
              answer={answer}
              userAnswer={userAnswers[i]}
              renderPlayer={renderPlayer}
              onChange={onChange}
            />
          ))}


          <button className="game__submit button" type="submit">Ответить</button>
        </form>

      </section>
    );
  }
}


GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
};


export default GenreQuestionScreen;
