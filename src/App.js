import React from "react";
import PizzaForm from "./PizzaForm";
import Home from "./Home";

const App = () => {
  return (
    <>
      <h1>Welcome to Lambda Eats!</h1>
      <p>The best pie in town! Probably!</p>

      <Home />

      <PizzaForm />
    </>
  );
};
export default App;
