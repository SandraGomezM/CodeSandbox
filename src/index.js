import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/common/header/Header";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
