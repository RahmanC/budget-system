import React, { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.classList.contains("ohw-modal") ||
        target.classList.contains("close")
      ) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClose]);

  return (
    <div className="ohw-modal fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-3xl w-4/5 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-md shadow p-4 relative text-gray-700">
        <button
          className="absolute top-[-15px] right-[-15px] w-8 h-8 bg-[#15849d] text-white rounded-full flex items-center justify-center close"
          onClick={handleClose}
        >
          &#10005;
        </button>
        <div className="h-auto max-h-[80vh] w-max overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
