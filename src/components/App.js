import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/app.css";

const App = () => {
  return (
    <>
      <h2>Surreal Estate</h2>
      <NavBar />
      <Switch>
        <Route exact path="/Properties" component={Properties} />
        <Route exact path="/AddProperty" component={AddProperty} />
      </Switch>
    </>
  );
};

export default App;
