import React, {useState} from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";
import PizzaForm from "./PizzaForm"

function Home(props) {
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

    console.log(addPizza)
  return (
    <div className="home-wrapper">
      <h1>Welcome to Lambda Eats!</h1>
      <p>The best pie in town! Probably!</p>
      <Link to="/pizza">
        <button>Create your Pizza!</button>
      </Link>
      <Route path="/pizza">
        <PizzaForm addPizza={addPizza} order={pizzas} />
      </Route>
    </div>
  );
}

export default Home;
