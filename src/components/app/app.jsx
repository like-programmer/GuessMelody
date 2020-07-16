import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {errorCount} = this.props;

    return <WelcomeScreen
      errorCount={errorCount}
      onWelcomeBtnClick={() => {
      }}
    />;
  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
