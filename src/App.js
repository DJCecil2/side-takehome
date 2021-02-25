import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header/Header";
import PropertyListings from "./PropertyListings/PropertyListings";
import "./App.scss";
import SavedListings from "./PropertyListings/SavedListings";

function App() {
  return (
    <Router>
      <div className="side-app">
        <CssBaseline />
        <Header />
        <section className="content">
          <Switch>
            <Route path="/" exact>
              <PropertyListings />
            </Route>
            <Route path="/saved">
              <SavedListings />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
