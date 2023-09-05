import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center flex-1 w-[100%] h-screen px-[3.5rem] ">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
