import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Armitaj from "../../assets/images/armitaj.webp";
//Add other component
import HeroImage from "../../assets/images/hi-2.webp";
import Product from "../../components/ProductList";
// Redux
import { fetchProducts } from "../../redux/products/productsAction";

const Home = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productState);

  useEffect(() => {
    if (!productsData.products.length) dispatch(fetchProducts());
  }, []);

  console.log(productsData?.products?.splice(3));
  return (
    <>
      <div className="w-full h-full p-2 flex justify-between items-center ">
        <img src={HeroImage} alt="" />
      </div>
      <div className="flex flex-col">
        {/* Products: */}
        <div className="m-2 text-zinc-900 mx-5">
          <h2 className="text-2xl font-medium mx-5">Products:</h2>
          <span className="grid grid-cols-3">
            {productsData?.products?.map((product) => (
              <Product key={product.id} productsData={product} />
            ))}
          </span>
          <span className="bg-zinc-300 p-2 float-right m-2">
            <Link to={"/products"}>More products ...</Link>
          </span>
        </div>
        {/* About */}
        <div className="m-2 text-zinc-900 mx-5">
          <h2 className="text-2xl font-medium mx-5">About us:</h2>
          <div className="grid grid-cols-2 justify-end p-5">
            <span className="justify-start leading-6">
              <h1 className="font-medium text-[#0a0909] ">OUR MISSION</h1>
              <p className=" py-5 text-[#0a0909] ">
                CHI BEPOSHAM is a global fashion and lifestyle e-tailer
                committed to making the beauty of fashion accessible to
                everyone. We use on-demand manufacturing technology to connect
                suppliers to our integrated supply chain, enabling us to reduce
                inventory waste and deliver quality products at affordable
                prices to customers around the world. We have operations in
                Mashhad, along with other key global markets.
              </p>
            </span>
            <img
              alt=""
              src={Armitaj}
              className="grayscale hover:grayscale-0"
            ></img>
          </div>
          <span className="bg-zinc-300 p-2 float-right m-2 ">
            <Link to={"/products"}>More About ...</Link>
          </span>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
