import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const onWelcomeBtnClick = () => {};

const App = (props) => {
  const {errorCount} = props;

  return (
    <WelcomeScreen
      errorCount={errorCount}
      onWelcomeBtnClick={onWelcomeBtnClick}
    />
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
