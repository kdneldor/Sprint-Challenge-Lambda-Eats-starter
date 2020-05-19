import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import Home from "./Home";

const App = (props) => {
  const [pizzas, setPizzas] = useState([]);

  const addPizza = (pizza) => {
    const newPizza = {
      name: pizza.name,
      sizes: pizza.sizes,
      pepperoni: false,
      jalapenos: false,
      mushrooms: false,
      olives: false,
      instructions: pizza.instructions,
    };
    setPizzas([...pizzas, newPizza]);
  };
  console.log(addPizza);
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <PizzaForm addPizza={addPizza} order={pizzas} />
      </Route>
      
      
    </div>
  );
};
export default App;

