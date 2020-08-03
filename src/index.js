import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";
import {reducer} from "./reducer.js";

const Settings = {
  ERROR_COUNT: 3
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorCount={Settings.ERROR_COUNT}
        questions={questions}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
