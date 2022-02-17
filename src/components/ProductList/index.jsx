import React, { useEffect, useState } from "react";
import axios from "axios";
import { getProduct } from "../../Services/API";

const Product = () => {
  const [showFilterBox, setShowFilterBox] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getProduct();
      console.log(data);
    };
    fetchAPI();
  }, []);

  return (
    <div className="container flex flex-col mx-auto px-[2%]">
      <div className="border-b-4 border-darkColor">
        <span className="text-center font-bold text-3xl text-darkColor ">
          <h1>ALL PRODUCTS</h1>
        </span>
      </div>
      <div className="my-5 flex flex-row">
        <div>
          <button
            className="flex flex-row"
            onClick={() => setShowFilterBox(!showFilterBox)}>
            <i class="fa-solid fa-filter"></i>
            <p className="px-2">{showFilterBox ? "Hide" : "Show"} Filters</p>
          </button>
          <div
            className="w-[250px] bg-lightColor h-[450px] "
            style={{ display: `${showFilterBox ? `flex` : `none`}` }}></div>
        </div>
        <div className="m-5 flex flex-row ">
          {/* {isData?.map((elem) => (
            <div className="flex flex-col  m-5 w-[200px] h-[200px]">
              <img alt="" src={elem.image} />
              <span>{elem.title}</span>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Product;
