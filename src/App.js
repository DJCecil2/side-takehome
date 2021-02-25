import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header/Header";
import PropertyListings from "./PropertyListings/PropertyListings";
import SavedListings from "./PropertyListings/SavedListings";

import "./App.scss";

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
              <PropertyListings filterUnsaved />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
