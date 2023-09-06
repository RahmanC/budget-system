import React, { useContext } from "react";
import myRoutes from "utils/routes";
import NavItem from "./NavItem";
import UtilContext from "context/UtilContext";

const Sidebar = () => {
  const { isMobile, showHamburger } = useContext(UtilContext);

  const links = [myRoutes.home, myRoutes.budget];

  return (
    <div
      className={`${
        isMobile && showHamburger
          ? "flex flex-col gap-5 z-100 fixed"
          : isMobile && !showHamburger
          ? "hidden"
          : ""
      } w-full h-full bg-white drop-shadow-md p-5 `}
    >
      <div className="mt-[2rem]">
        {links.map((route) => {
          return <NavItem key={route.title} {...route} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
