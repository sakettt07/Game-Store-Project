import React from 'react';
import logo from './../assets/images/store-logo.png';
import { IoSearch } from 'react-icons/io5';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex items-center mx-5'>
      <img src={logo} width={240} height={60} className='p-5' />
      <div className='flex bg-slate-50 p-4 mt-2 items-center w-[70%] rounded-full'>
        <IoSearch />
        <input type="text" className='outline-none px-4' />
      </div>
      <div className='px-7 pt-5 w-[50px] h-[54px] '>
        <FaMoon  />
        <FaSun />
      </div>
    </div>
  )
}

export default Header
