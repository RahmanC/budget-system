import React from "react";
import { NavbarProps } from "utils/types";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { LogoutUser } from "redux/slices/auth";

const Navbar = ({ title, username }: NavbarProps) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogoutUser());
  };
  return (
    <div className="w-[100%] bg-white  drop-shadow-md p-5  flex justify-between items-center ">
      <p className="font-[700] text-[1.3rem]">{title}</p>
      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] bg-[#e4e4e4] rounded-full"></div>
        <p className="font-[600] text-[1.2rem] capitalize">{username}</p>
        <IoIosArrowDown color="#666666" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Navbar;
