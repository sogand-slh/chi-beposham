import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";

import Product from "../../components/ProductList";
// Redux
import { fetchProducts } from "../../redux/products/productsAction";
import { getProduct } from "../../Services/API";
  
const ProductPage = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productState);

  useEffect(() => {
    if (!productsData.products.length) dispatch(fetchProducts());
  }, []);

console.log(productsData.products);
  return (
    <div>
      <div className="border-b-4 border-darkColor m-5">
        <span className="text-center font-bold text-3xl text-darkColor ">
          <h1>ALL PRODUCTS</h1>
        </span>
      </div>
      {productsData.loading ? (
        // <Loader />
        // <Product className="animate-pulse flex space-x-4"/>
        <p className="flex justify-center">Loading...</p>
      ) : productsData.error ? (
        <p>Something with wrong</p>
      ) : (
       
        <div className="grid grid-cols-4">
       { productsData?.products?.map((product) => (
          
            <Product key={product.id} productsData={product} />       
        ))}
          </div>
      )}
    </div>
  );
};

export default ProductPage;
