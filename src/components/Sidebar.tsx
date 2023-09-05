import React from "react";
import myRoutes from "utils/routes";
import NavItem from "./NavItem";

const Sidebar = () => {
  const links = [myRoutes.home, myRoutes.budget, myRoutes.expenses];

  return (
    <div className="w-[100%] h-[100%] bg-white drop-shadow-md p-5 flex flex-col">
      <div className="font-[900] text-[2rem]">CCICC</div>
      <div className="mt-[2rem]">
        {links.map((route) => {
          return <NavItem key={route.title} {...route} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
