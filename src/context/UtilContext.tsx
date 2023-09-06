import * as React from "react";

import { useMediaQuery } from "hooks/useMediaQuery";
import { AppProps, contextProps } from "utils/types";

const UtilContext = React.createContext({} as contextProps);

export const UtilProvider: React.FC<AppProps> = ({ children }) => {
  const [showHamburger, setShowHamburger] = React.useState<boolean>(false);
  const isMobile = useMediaQuery();

  const toggleHamburger = () => {
    setShowHamburger((prevS) => !prevS);

    setTimeout(() => {
      if (!showHamburger && isMobile) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, 100);
  };

  return (
    <UtilContext.Provider
      value={{
        isMobile,
        showHamburger,
        toggleHamburger,
      }}
    >
      {children}
    </UtilContext.Provider>
  );
};

export default UtilContext;
