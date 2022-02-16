import React, { useEffect, useState } from "react";
//Add other component
import HeroImage from "../../assets/images/hi-2.jpg";
import Product from "../../components/ProductList";

const Home = () => {
  return (
    <>
      <div className="w-full h-full p-2 flex justify-between items-center ">
        <img src={HeroImage} alt="" />
      </div>
      <div>{"info"}</div>
    </>
  );
};

export default Home;
