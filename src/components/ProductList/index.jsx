import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";
// Components
import Loader from "../Loader";
import ProductDetail from "../ProductDetail";

const Product = ({ productsData }) => {
  const [showFilterBox, setShowFilterBox] = useState(true);
  const dispatch = useDispatch()
  const state = useSelector(state=> state.cartState)

  return (
    <div className="container mx-auto px-[2%]">
      <div className="my-5 ">
        {/*
        <div>
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
        <div className="flex flex-col flex-1 flex-wrap py-2 justify-between items-center m-5 w-[250px] bg-[white] h-[300px]">
          <img
            alt=""
            src={productsData.image}
            className="w-[125px] h-[125px]"
          />
          {/* Description */}
          <div className="flex flex-col flex-1  py-3 justify-between">
            <span className="text-xl font-medium ">
              {productsData.title.substring(0, 3)}
            </span>

            <div className="text-sm">
              <span className="font-medium">Category:</span>{" "}
              {productsData.category}
            </div>
            <div className="text-sm">
              <Link to={`/productDetail/${productsData.id}`} state={productsData}>
                <span className="text-sm">More Detail ...</span>
              </Link>
            </div>
            <span>
              <div>
                {quantityCount(state, productsData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productsData})}><i class="fa-solid fa-trash bg-zinc-200 p-1"></i></button>}
                { quantityCount(state, productsData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE_ITEM", payload: productsData})}>
                  <i class="fa-solid fa-minus bg-zinc-200 p-1"></i>
                </button>}
                <span className="p-2">{productsData.price} $</span>
                {isInCart(state, productsData.id) ? <button onClick={() => dispatch({type: "INCREASE_ITEM", payload: productsData})}>
                  <i class="fa-solid fa-plus bg-zinc-200 p-1"></i>
                </button>
              :
              <button onClick={() => dispatch({type: "ADD_ITEM", payload: productsData})} className="bg-zinc-200 p-1">Add to Cart</button>  
              }
              </div>
            </span>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Product;
