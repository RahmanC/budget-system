import React from "react";
import { NavbarProps } from "utils/types";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({ title, username }: NavbarProps) => {
  return (
    <div className="w-[100%] bg-white  drop-shadow-md p-5  flex justify-between items-center ">
      <p className="font-[700] text-[1.3rem]">{title}</p>
      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] bg-[#e4e4e4] rounded-full"></div>
        <p className="font-[600] text-[1.2rem] capitalize">{username}</p>
        <IoIosArrowDown color="#666666" />
      </div>
    </div>
  );
};

export default Navbar;
