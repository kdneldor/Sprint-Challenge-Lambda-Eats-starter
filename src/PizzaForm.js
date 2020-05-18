import React from "react";
import {Link} from "react-router-dom";
function PizzaForm() {
  //     const [formState, setFormState] = useState(
  //       name: "",
  //       size: "",
  // toppings: "",

  //   );

  return (
    <form className="pizza-form">
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <label className="name-form" htmlFor="name">
        Name:
        <br></br>
        <input type="text" name="name" id="name" placeholder="Name"></input>
      </label>
      <br></br>
      <br></br>
      <label htmlFor="sizes">
        Size:
        <br></br>
        <select value={"Turkey"} name="sizes" id="sizes" onChange={"Turkey"}>
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
      <label htmlFor="Pepperoni">
        <input
          type="checkbox"
          id="Pepperoni"
          name="Pepperoni"
          //   checked={formState.terms}
          //   onChange={inputChange}
        />
        Pepperoni
        {/* {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null} */}
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
      <label htmlFor="motivation">
        Special Instructions?
        <br></br>
        <textarea
          name="motivation"
          id="motivation"
          //   value={formState.motivation}
          //   onChange={inputChange}
        />
        {/* {errorState.motivation.length > 0 ? (
          <p className="error">{errorState.motivation}</p>
        ) : null} */}
      </label>
      <br></br>
      <button>Add to Order</button>
    </form>
  );
}

export default PizzaForm;
