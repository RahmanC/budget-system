import ReactPaginate from "react-paginate";
import { PaginationProps } from "utils/types";

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <div className="flex justify-start ml-1 mb-10">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={onPageChange}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName="flex justify-end"
        previousLinkClassName="mr-3 cursor-pointer"
        nextLinkClassName="cursor-pointer"
        activeClassName="text-white"
        disabledClassName="hidden"
      />
    </div>
  );
};

export default Pagination;
