import React, { useEffect, useState } from "react";

// Functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";
// Components
import Loader from "../Loader";

const Product = ({productsData}) => {
  const [showFilterBox, setShowFilterBox] = useState(true);
  const [data, setData] = useState();

console.log(productsData,"productsData");
  return (
    <div className="container mx-auto px-[2%]">
      
      <div className="my-5 ">
        {/*<div>
          <button
            className="flex flex-row"
            onClick={() => setShowFilterBox(!showFilterBox)}>
            <i class="fa-solid fa-filter"></i>
            <p className="px-2">{showFilterBox ? "Hide" : "Show"} Filters</p>
          </button>
          <div
            className="w-[250px] bg-lightColor h-[90%] "
            style={{ display: `${showFilterBox ? `flex` : `none`}` }}></div>
        </div> */}
       
          {/* {productsData?.map((elem) => ( */}
            <div className="flex flex-col flex-1 flex-wrap p-2 justify-between items-center m-5 w-[250px] bg-[white] h-[300px]">
              <img alt="" src={productsData.image} className="w-[125px] h-[125px]" />
              <span>{productsData.title.substring(0, 3)}</span>
              <span>
              <button ><i class="fa-solid fa-minus bg-zinc-200 p-1"></i></button>
              <span className="p-2">{productsData.price}</span>
              <button ><i class="fa-solid fa-plus bg-zinc-200 p-1"></i></button>
              <button ><i class="fa-solid fa-trash-can bg-zinc-200 p-1"></i></button>
              </span>
            </div>
          {/* ))} */}
   
      </div>
    </div>
  );
};

export default Product;
