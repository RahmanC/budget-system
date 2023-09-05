import React, { useMemo } from "react";
import { useSortBy, useTable, useGlobalFilter, Column } from "react-table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

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

  return (
    <div className=" bg-white mt-4">
      <div className="flex flex-col">
        <div className=" relative border border-opacity-10 shadow-md rounded bg-table p-4 max-w-screen-xl max-h-content min-h-min-content overflow-x-auto min-w-full">
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
                              <FaSortDown size={16} />
                            ) : (
                              <FaSortUp size={16} />
                            )
                          ) : (
                            <FaSort size={16} />
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
                rows?.map((row: any) => {
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
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableData;
