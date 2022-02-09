import React from "react";
import Logo from "../../assets/images/shop-logo.png";
import HeroImage from "../../assets/images/hi-2.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-[4rem] ">
        <div className="w-full h-full p-2 flex justify-between items-center ">
          <div className="flex justify-between items-center">
            <span className="px-5">
              <Link to="/">
                <img alt="" src={Logo} className="w-12 "></img>
              </Link>
            </span>
            <span className="px-5">
              <Link to="/">Home</Link>
            </span>
            <span className="px-5">
              <Link to="/product">Product</Link>
            </span>
          </div>
          <Link to="/checkout" className="px-5">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
      <div className="w-full h-full p-2 flex justify-between items-center ">
        <img src={HeroImage} alt="" />
      </div>
    </>
  );
};

export default Header;
