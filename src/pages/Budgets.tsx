import TableData from "components/TableData";
import React from "react";
import { BUDGET_COLUMN } from "utils/TableColumns";
import { monthlyBudget } from "utils/mock";
import { ListProps } from "utils/types";
import { FaEye } from "react-icons/fa";

const list: ListProps[] = [
  {
    icon: <FaEye size={12} color="gray" />,
    text: "View budget",
    link: "/budget",
  },
];

const Budgets = () => {
  return (
    <div>
      <div>
        <TableData
          columnData={BUDGET_COLUMN}
          rowData={monthlyBudget}
          list={list}
        />
      </div>
    </div>
  );
};

export default Budgets;
