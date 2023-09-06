import * as React from 'react';

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 900);

    const handleEvent = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth > 900) {
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleEvent);
    return () => {
      window.removeEventListener('resize', handleEvent);
    };
  }, [isMobile]);

  return isMobile;
};
