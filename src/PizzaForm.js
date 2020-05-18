import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  sizes: yup.string(),
  pepperoni: yup.boolean().oneOf([true])
});

function PizzaForm() {
  const [formState, setFormState] = useState({
    name: "",
    sizes: "",
    pepperoni: "",
  });
  const [errorState, setErrorState] = useState({
    name: "",
    sizes: "",
    pepperoni: "",
  });
  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };
  const inputChange = (e) => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };
  const formSubmit = (e) => {
    // e.preventDefault();
    console.log("Form Submitted!");
    // axios
    //   .post("https://reqres.in/api/users", formState)
    //   .then((response) => {
    //     console.log(props.addUser);
    //     props.addUser(response.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <form className="pizza-form" onSubmit={formSubmit}>
      <div className="home-button">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <label className="name" htmlFor="name">
        Name:
        <br></br>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formState.name}
          onChange={inputChange}
        ></input>
      </label>
      <br></br>
      <br></br>
      <label htmlFor="sizes">
        Size:
        <br></br>
        <select name="sizes" id="sizes" onChange={inputChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra-Large">Extra Large</option>
        </select>
        {/* {errorState.position.length > 0 ? (
          <p className="error">{}</p>
        ) : null} */}
      </label>
      <br></br>
      <br></br>
      <label>Toppings:</label>
      <br></br>
      <label htmlFor="pepperoni">
        <input
          type="checkbox"
          id="pepperoni"
          name="pepperoni"
          checked={formState.pepperoni}
          onChange={inputChange}
        />
        Pepperoni
        {errorState.pepperoni.length > 0 ? (
          <p className="error">{errorState.pepperoni}</p>
        ) : null}
      </label>
      <label htmlFor="Jalapenos">
        <input
          type="checkbox"
          id="Jalapenos"
          name="Jalapenos"
          //   checked={formState.terms}
          //   onChange={inputChange}
        />
        Jalapenos
        {/* {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null} */}
      </label>
      <label htmlFor="Mushrooms">
        <input
          type="checkbox"
          id="Mushrooms"
          name="Mushrooms"
          //   checked={formState.terms}
          //   onChange={inputChange}
        />
        Mushrooms
        {/* {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null} */}
      </label>
      <label htmlFor="Olives">
        <input
          type="checkbox"
          id="Olives"
          name="Olives"
          //   checked={formState.terms}
          //   onChange={inputChange}
        />
        Olives
        {/* {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null} */}
      </label>
      <br></br>
      <br></br>
      <label htmlFor="special-instructions">
        Special Instructions?
        <br></br>
        <textarea
          name="special-instructions"
          id="special-instructions"
          //   value={formState.motivation}
          //   onChange={inputChange}
        />
        {/* {errorState.motivation.length > 0 ? (
          <p className="error">{errorState.motivation}</p>
        ) : null} */}
      </label>
      <br></br>
      <button>Add to Order!</button>
    </form>
  );
}

export default PizzaForm;
