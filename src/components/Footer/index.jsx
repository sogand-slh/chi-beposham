import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[20rem] bg-[#0a0909] static bottom-0 clear-none">
      <div className="w-full h-[5rem] text-[#e7dfd6] flex flex-nowrap justify-between px-20 py-5 ">
        <span className="font-['Segoe_UI']">
          <Link to="/">
            <h2>CHI BEPOSHAM</h2>
          </Link>
        </span>
        <div>
          <input
            className="bg-[#1d1b1b] text-[#e7dfd6] p-2 rounded-l-sm"
            placeholder="Join our mailing list"
          />
          <button
            type="button"
            onClick="#"
            className="bg-[#e7dfd6] text-[#0a0909] p-2 rounded-r-sm	">
            Join
          </button>
        </div>
      </div>
      <div className="w-full  h-[10rem] text-[#e7dfd6] flex flex-nowrap justify-between px-20 pb-10">
        <div className="font-medium">
          <span>Vakil Abad Avenue,</span>
          <br />
          <span>Haft Tir Armitaj Tower</span>
        </div>
        <div className="flex flex-col leading-10 text-xs">
          <span>
            <Link to="/about">About</Link>
          </span>
          <span>
            <a href="#">FAQs</a>
          </span>
          <span>
            <a href="#">Careers</a>
          </span>
        </div>
        <div className="flex flex-col leading-10 text-xs">
          <span>
            <Link to="/contact">Contact</Link>
          </span>
          <span>
            <a href="#">Product Manual</a>
          </span>
          <span>
            <a href="#">Returns &amp; Echanges</a>
          </span>
          <span>
            <a href="#">Terms &amp; condition</a>
          </span>
        </div>
        <div className="flex flex-col leading-10 text-xs">
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-solid fa-paper-plane"></i>
          </a>
        </div>
      </div>
      <div className="w-full  h-[5rem] text-[#e7dfd6] flex justify-between px-20 pt-5">
        <span>©2022 CHI BEPOSHAM | All rights reserved.</span>
        <span>
          <a href="http://sogand-saleh.ir/">Sogand Saleh</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
