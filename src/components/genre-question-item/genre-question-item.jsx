import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class GenreQuestionItem extends PureComponent {
  render() {
    const {
      id,
      answer,
      userAnswer,
      renderPlayer,
      onChange,
    } = this.props;

    return (
      <div className="track">

        {renderPlayer(answer.src, id)}

        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${id}`}
            id={`answer-${id}`}
            checked={userAnswer}
            onChange={(evt) => {
              const value = evt.target.checked;

              onChange(id, value);
            }}
          />
          <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
        </div>
      </div>
    );
  }
}

GenreQuestionItem.propTypes = {
  id: PropTypes.number.isRequired,
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }),
  userAnswer: PropTypes.bool.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreQuestionItem;
