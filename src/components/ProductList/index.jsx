import React, { useEffect, useState } from "react";
import axios from "axios";
import { getProduct } from "../../Services/API";

const Product = () => {
  const [showFilterBox, setShowFilterBox] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      const respond = await getProduct();
      setData(respond);
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
        <div className="m-5 grid grid-cols-4 gap-1">
          {data?.map((elem) => (
            <div className="flex flex-col flex-1 flex-wrap p-2 justify-between items-center m-5 w-[250px] bg-[white] h-[300px]">
              <img alt="" src={elem.image} className="w-[125px] h-[125px]" />
              <span>{elem.title.substring(0, 3)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
