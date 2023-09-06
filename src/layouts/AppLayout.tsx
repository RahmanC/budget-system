import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import UtilContext from "context/UtilContext";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import swapTitle from "utils/swapTitle";

const AppLayout = () => {
  const { isMobile, showHamburger } = useContext(UtilContext);
  const [navTitle, setNavTitle] = useState<string>("budget");
  const { userProfile, isLoggedIn } = useSelector((state: any) => state.auth);

  const user = userProfile?.email?.split("@")[0];

  const path = useLocation();

  useEffect(() => setNavTitle(path.pathname), [path.pathname]);
  return isLoggedIn ? (
    <div className="flex flex-col max-w-[100vw] h-[100vh]">
      <div className="h-[10vh] max-w-full">
        <Navbar
          title={swapTitle[navTitle as keyof typeof swapTitle]}
          username={user}
        />
      </div>

      <div className={`h-[90vh] flex `}>
        <div
          className={` ${
            isMobile && showHamburger
              ? "w-[100%] z-10"
              : isMobile && !showHamburger
              ? "w-0"
              : "w-[15%]"
          }`}
        >
          <Sidebar />
        </div>

        <div
          className={`${
            isMobile && !showHamburger ? "p-[1rem] max-w-[100%]" : "w-[85%] p-5"
          } overflow-y-auto `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="login" replace />
  );
};

export default AppLayout;
