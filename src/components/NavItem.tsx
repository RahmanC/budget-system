import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavItem = (props: {
  path: string;
  icon: React.ReactNode;
  title: string;
}) => {
  const { path, icon, title } = props;
  const [isActive, setIsActive] = useState(false);

  const handleNavLinkClick = () => {
    setIsActive(true);
  };

  return (
    <div className="min-h-[4.5rem] mt-0.25rem text-left w-full pl-1.5 hover:scale-101">
      <NavLink
        to={path}
        className={`flex items-center gap-2 p-1.5 text-black text-base cursor-pointer ${
          isActive ? "font-semibold" : ""
        }`}
        onClick={handleNavLinkClick}
      >
        <div className="text-1.2rem">{icon}</div>
        <span>{title}</span>
      </NavLink>
    </div>
  );
};

export default NavItem;
