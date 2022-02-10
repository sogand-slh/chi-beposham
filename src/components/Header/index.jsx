import React from "react";
import Logo from "../../assets/images/shop-logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-[4rem] ">
        <div className="w-full h-full p-2 flex justify-between items-center ">
          <div className="flex justify-between items-center">
            <span className="px-5">
              <Link to="/">
                <img alt="" src={Logo} className="w-12 " />
              </Link>
            </span>
            <span className="px-5">
              <Link to="/">Home</Link>
            </span>
            <span className="px-5">
              <Link to="/product">Product</Link>
            </span>
            <span className="px-5">
              <Link to="/about">About us</Link>
            </span>
            <span className="px-5">
              <Link to="/contact">Contact</Link>
            </span>
          </div>
          <Link to="/checkout" className="px-5">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
