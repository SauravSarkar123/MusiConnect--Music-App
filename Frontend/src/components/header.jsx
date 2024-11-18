import React from 'react';
import { FaUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  
  const handleclick = () => {
    navigate('/login')
  }

  return (
    <div className="bg-[#1C1B1B] h-20 flex items-center justify-between px-6 shadow-md">
      <div className="text-white font-bold text-2xl">
      <h1 className="text-3xl font-extrabold text-violet-500">MusiConnect</h1>

      </div>

      <div className="flex items-center gap-8 text-gray-300">
        <div className="relative">
          <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Songs"
            className="border border-gray-600 rounded-full pl-10 pr-4 py-1 h-8 text-gray-200 bg-[#2C2C2C] focus:outline-none"
          />
        </div>

        {/* <nav className="flex gap-7 font-semibold text-sm">
          <p className="cursor-pointer hover:text-white">HOME</p>
          <p className="cursor-pointer hover:text-white">DISCOVER</p>
          <p className="cursor-pointer hover:text-white">TRENDING</p>
          <p className="cursor-pointer hover:text-white">LIBRARY</p>
        </nav> */}

        <div className="flex items-center gap-2 cursor-pointer hover:text-white" onClick={handleclick}>
          <FaUser className="text-lg" />
          <p className="font-semibold text-sm">LOGIN</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
