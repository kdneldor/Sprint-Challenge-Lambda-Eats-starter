import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PizzaForm from "./PizzaForm";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path="/pizza" component={PizzaForm} />
    </div>
  );
};
export default App;
