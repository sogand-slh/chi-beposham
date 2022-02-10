import React, { useEffect, useState } from "react";
import HeroImage from "../../assets/images/hi-2.jpg";

const Home = () => {
  const [data, setData] = useState();
  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, []);
  console.log(data, "data");
  return (
    <>
      <div className="w-full h-full p-2 flex justify-between items-center ">
        <img src={HeroImage} alt="" />
      </div>
      <div>{"info"}</div>
      <div>{data?.[0]?.price}</div>
    </>
  );
};

export default Home;
