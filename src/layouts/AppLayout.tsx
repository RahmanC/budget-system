import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import swapTitle from "utils/swapTitle";

const AppLayout = () => {
  const [navTitle, setNavTitle] = useState<string>("budget");

  const path = useLocation();

  useEffect(() => setNavTitle(path.pathname), [path.pathname]);
  return (
    <div className="flex flex-1 w-[100vw] h-[100vh]">
      <div className="w-[15%]">
        <Sidebar />
      </div>

      <div className="flex flex-col w-[85%] ">
        <Navbar
          title={swapTitle[navTitle as keyof typeof swapTitle]}
          username={"Emmanuel"}
        />
        <div className=" p-5 flex-1  overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
