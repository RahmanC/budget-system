import TableData from "components/TableData";
import React from "react";
import { BUDGET_COLUMN } from "components/TableColumns";

import { ListProps } from "utils/types";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";

const list: ListProps[] = [
  {
    icon: <FaEye size={12} color="gray" />,
    text: "View budget",
    link: "/budget",
  },
];

const Budgets = () => {
  const { budget } = useSelector((state: any) => state.budget);

  return (
    <div>
      <div>
        <TableData columnData={BUDGET_COLUMN} rowData={budget} list={list} />
      </div>
    </div>
  );
};

export default Budgets;
