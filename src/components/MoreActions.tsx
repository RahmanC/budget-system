import * as React from "react";

import { useNavigate } from "react-router-dom";
import { useClickOutside } from "hooks/useClickOutside";
import { useLocalStorage } from "hooks/useLocalStorage";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Budget, ListProps } from "utils/types";

const MoreActions: React.FC<{ budget: Budget; list: ListProps[] }> = ({
  budget,
  list,
}) => {
  const { visible, setVisible, ref, ref1 } = useClickOutside();
  const { setLocalStorage } = useLocalStorage("__budgetData");
  const navigate = useNavigate();

  const openDropdown = () => {
    setVisible(true);
  };

  const closeDropdown = (link?: string, onClickModal?: any) => {
    if (link) {
      setLocalStorage(budget);
      navigate(link);
    } else if (onClickModal) {
      onClickModal();
      setVisible(false);
    } else {
      setVisible(false);
    }
  };

  return (
    <div className="relative">
      <div ref={ref1}>
        <BsThreeDotsVertical
          className="cursor-pointer"
          onClick={openDropdown}
        />
      </div>
      {visible && (
        <div
          ref={ref}
          tabIndex={-1}
          className="absolute top-10 right-0 w-max  min-h-content bg-white border shadow-md rounded overflow-hidden animate-zoom z-10"
          onBlur={() => closeDropdown()}
        >
          {list.map(({ icon, text, link, onClickModal }) => (
            <div
              key={text}
              className="flex items-center gap-2 p-2 font-[500] hover:bg-[#f2f6f7] cursor-pointer"
              onClick={() =>
                closeDropdown(link ? `${link}/${budget.id}` : onClickModal())
              }
            >
              {icon}
              <p className="text-[0.8rem] text-[gray]">{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoreActions;
