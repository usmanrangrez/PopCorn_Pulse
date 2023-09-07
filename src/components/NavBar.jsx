import React from "react";
import { GiPopcorn } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="text-white flex justify-between p-2 z-[100] absolute w-full">
      <NavLink
        to={"/"}
        className="flex text-3xl font-bold text-red-600 hover:animate-pulse hover:text-white cursor-pointer"
      >
        <GiPopcorn /> Pulse
      </NavLink>
      <div className="flex space-x-6">
        <button className="text-fuchsia-50 hover:text-red-500">Sign In</button>
        <button className="bg-red-600 pl-4 pr-4 pt-2 pb-2 rounded-md hover:bg-red-700 hover:text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
