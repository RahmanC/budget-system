import React from "react";
import { ButtonProps } from "utils/types";

const AppButton = ({ label, type, style, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-[#15849d] rounded-[10px] p-[0.7rem] w-[100%] flex items-center justify-center text-white font-[900] text-[1.1rem] uppercase cursor-pointer`}
      style={style}
    >
      {label}
    </button>
  );
};

export default AppButton;
