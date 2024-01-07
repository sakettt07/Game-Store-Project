import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/images/store-logo2.png";
import { IoSearch } from "react-icons/io5";
import { FaMoon} from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const {theme,setTheme}=useContext(ThemeContext);
  useEffect(()=>{
    // console.log("theme",theme);
  },[])
  return (
    <div className="flex items-center mx-5">
      <img src={logo} width={120} height={50} className="p-5" />
      <div className="flex bg-slate-50 p-4 mt-2 items-center w-[70%] rounded-full">
        <IoSearch />
        <input
          placeholder="Search Games"
          type="text"
          className="outline-none px-3 bg-slate-50"
        />
      </div>
      <div className="px-7 fle pt-5 w-[50px] h-[54px] ">
        {theme=='light' ? (
          <FaMoon
            className="bg-slate-300 text-[35px] p-2 text-black rounded-full cursor-pointer mt-[-6px]"
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
          />
        ) : (
          <FaSun
            className="bg-white text-[40px] te p-3 text-black rounded-full cursor-pointer mt-[-6px]"
            onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
          />
        )}
        {/* <FaShoppingCart /> */}
      </div>
    </div>
  );
};

export default Header;
