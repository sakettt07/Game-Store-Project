import React, { useState } from "react";
import logo from "./../assets/images/store-logo.png";
import { IoSearch } from "react-icons/io5";
import { FaMoon, FaShoppingCart } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center mx-5">
      <img src={logo} width={240} height={60} className="p-5" />
      <div className="flex bg-slate-50 p-4 mt-2 items-center w-[70%] rounded-full">
        <IoSearch />
        <input
          placeholder="Search Games"
          type="text"
          className="outline-none px-3 bg-slate-50"
        />
      </div>
      <div className="px-7 fle pt-5 w-[50px] h-[54px] ">
        {toggle ? (
          <FaMoon
            className="bg-slate-500 text-[35px] p-1 text-black rounded-full cursor-pointer mt-[-6px]"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <FaSun
            className="bg-white text-[40px] te p-3 text-black rounded-full cursor-pointer mt-[-6px]"
            onClick={() => setToggle(!toggle)}
          />
        )}
        {/* <FaShoppingCart /> */}
      </div>
    </div>
  );
};

export default Header;
