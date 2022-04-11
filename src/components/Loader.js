
import React from "react";
//Gif
import spinner from "../assets/Spinner.gif";
const Loader = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={spinner} alt="Loading" />
      <h1>Loading ...</h1>
    </div>
  );
};

export default Loader;