import UtilContext from "context/UtilContext";
import * as React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileHamburger: React.FC = () => {
  const { showHamburger, toggleHamburger } = React.useContext(UtilContext);

  return (
    <div className="cursor-pointer md:hidden" onClick={toggleHamburger}>
      {showHamburger ? (
        <FaTimes className="transition-transform " size={20} color="#15849d" />
      ) : (
        <FaBars className="transition-opacity" size={20} color="#15849d" />
      )}
    </div>
  );
};

export default MobileHamburger;
