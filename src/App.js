import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./Home.js";
import { Cocktail } from "./Cocktail.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cocktail/:cocktailId" component={Cocktail} />
      </Switch>
    </Router>
  );
}

export default App;
