import React from "react";
import { NavbarProps } from "utils/types";
import { IoIosArrowDown, IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { LogoutUser } from "redux/slices/auth";
import { useClickOutside } from "hooks/useClickOutside";
import MobileHamburger from "./MobileHamburger";

const Navbar = ({ title, username }: NavbarProps) => {
  const { visible, setVisible, ref, ref1 } = useClickOutside();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogoutUser());
  };

  const openDropdown = () => {
    setVisible(true);
  };

  const closeDropdown = () => {
    setVisible(false);
  };

  return (
    <div className="w-[100%] bg-white  drop-shadow-md p-5  flex justify-between items-center ">
      <div className="flex items-center gap-3">
        <MobileHamburger />
        <div className="font-[900] text-[2rem] hidden md:flex ">CCICC</div>
        <p className="font-[700] text-[1.3rem] ml-0 md:ml-[45%] ">{title}</p>
      </div>
      <div
        className="flex items-center gap-3 cursor-pointer"
        ref={ref1}
        onClick={openDropdown}
      >
        <div className="w-[40px] h-[40px] bg-[#e4e4e4] rounded-full"></div>
        <p className="font-[600] text-[1.2rem] capitalize">{username}</p>
        <IoIosArrowDown color="#666666" />
      </div>
      {visible && (
        <div
          ref={ref}
          tabIndex={-1}
          className="absolute top-[4.5rem] right-[1rem] w-max  min-h-content bg-white border shadow-md rounded overflow-hidden animate-zoom z-10 flex items-center gap-4 px-5 py-1 cursor-pointer hover:bg-slate-400 hover:text-white"
          onBlur={() => closeDropdown()}
          onClick={handleLogout}
        >
          <IoMdLogOut />
          <p>Logout</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
