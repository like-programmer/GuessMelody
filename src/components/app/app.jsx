import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const welcomeBtnClickHandler = () => {};

const App = (props) => {
  const {errorCount} = props;

  return (
    <WelcomeScreen
      errorCount={errorCount}
      welcomeBtnClickHandler={welcomeBtnClickHandler}
    />
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
