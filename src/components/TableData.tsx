import React, { useMemo, useState } from "react";
import { useSortBy, useTable, useGlobalFilter, Column } from "react-table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import Pagination from "./Pagination";
import MoreActions from "./MoreActions";

type ColumnData = Array<Column<any>>;
type RowData = Array<{ [key: string]: any }>;

interface TableDataProps {
  columnData: ColumnData;
  rowData: RowData;
  loading?: boolean;
  error?: boolean;
  pageSize?: number;
  list?: any;
  onClick?: () => void;
}

const TableData: React.FC<TableDataProps> = ({
  columnData,
  rowData,
  loading,
  error,
  pageSize,
  list,
  onClick,
}) => {
  const columns = useMemo(() => columnData, [columnData]);
  const data = useMemo(() => rowData, [rowData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const size = pageSize || 10;
  const pagesVisited = pageNumber * size;
  const pageCount = Math.ceil(rows?.length / size);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="  mt-4">
      <div className="flex flex-col">
        <div className=" bg-white relative border border-opacity-10 shadow-md rounded bg-table p-4 max-w-screen-xl min-h-[70vh] overflow-x-auto min-w-full">
          <table
            {...getTableProps()}
            className=" w-full table-collapse text-left"
          >
            <thead>
              {headerGroups?.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                  {headerGroup.headers?.map((column: any) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="pr-4"
                    >
                      <div className=" flex items-center gap-tiny">
                        <div className=" text-xs font-semibold mr-2">
                          {column.render("header")}
                        </div>
                        <span className=" flex items-center">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FaSortDown size={14} />
                            ) : (
                              <FaSortUp size={14} />
                            )
                          ) : (
                            <FaSort size={14} color="#e4e4e4" />
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {loading ? (
                <tr>
                  <div>Loading...</div>
                </tr>
              ) : rows?.length < 1 ? (
                <tr>
                  <td className="text-center">No record</td>
                </tr>
              ) : (
                rows
                  ?.slice(pagesVisited, pagesVisited + size)
                  ?.map((row: any) => {
                    prepareRow(row);
                    return (
                      <tr {...row?.getRowProps()} className="cursor-pointer">
                        {row?.cells?.map((cell: any) => {
                          return (
                            <td
                              {...cell?.getCellProps()}
                              className=" py-2 min-w-30px max-w-120px mx-4"
                            >
                              {cell?.render("Cell")}
                            </td>
                          );
                        })}
                        {list && (
                          <td>
                            <MoreActions budget={row?.original} list={list} />
                          </td>
                        )}
                      </tr>
                    );
                  })
              )}
            </tbody>
          </table>
        </div>
      </div>
      {rows?.length > size && (
        <Pagination pageCount={pageCount} onPageChange={changePage} />
      )}
    </div>
  );
};

export default TableData;
