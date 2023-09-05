import ReactPaginate from "react-paginate";
import { PaginationProps } from "utils/types";

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <div className="flex justify-end  my-3">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={onPageChange}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName="flex justify-end items-center gap-2 cursor-pointer text-[0.8rem]"
        previousLinkClassName="mr-3 cursor-pointer text-[#15849d] font-[900]"
        nextLinkClassName="cursor-pointer text-[#15849d] font-[900]"
        activeClassName="bg-[#15849d] w-[30px] h-[30px] p-1 rounded-full flex justify-center items-center text-white"
        disabledClassName="hidden"
      />
    </div>
  );
};

export default Pagination;
