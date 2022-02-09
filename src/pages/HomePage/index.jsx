import React, { useEffect, useState } from "react";

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
      <div>{"info"}</div>
      <div>{data?.[0]?.price}</div>
    </>
  );
};

export default Home;
