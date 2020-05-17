import React from "react";
import { useHistory } from "react-dom";

function Home(props) {
  console.log(props);
  const history = useHistory();
  return (
    <div className="home-wrapper">
      <button
        className="md-button shop-button"
        onClick={() => history.push("/items")}
      >
        Shop now!
      </button>
    </div>
  );
}

export default Home;