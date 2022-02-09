import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[4rem] bg-[#aaa] ">
      <div className="w-full h-full p-2 flex justify-between items-center ">
        <span>
          <Link to="/">Logo</Link>
        </span>
        <span>
          {" "}
          <Link to="/">Logo</Link>
        </span>
        <span>menu</span>
      </div>
    </div>
  );
};

export default Header;
