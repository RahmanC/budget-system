import * as React from 'react';

export const useClickOutside = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const ref = React.useRef<HTMLDivElement>(null);
  const ref1 = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        ref1.current &&
        !ref1.current.contains(event.target)
      )
        setVisible(false);
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);

  return { ref, ref1, visible, setVisible };
};
