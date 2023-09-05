import TableData from "components/TableData";
import React from "react";
import { BUDGET_COLUMN } from "utils/TableColumns";
import { monthlyBudget } from "utils/mock";
import { ListProps } from "utils/types";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const list: ListProps[] = [
  {
    icon: <FaEye size={12} color="gray" />,
    text: "View budget",
    link: "/users",
  },
  {
    icon: <FaPen size={12} color="#15849d" />,
    text: "Update budget",
  },
  {
    icon: <FaTrash size={12} color="tomato" />,
    text: "Delete Budget",
  },
];

const Budgets = () => {
  return (
    <div>
      <div className="rounded-lg bg-[#15849d] text-white text-center p-2 flex w-max cursor-pointer">
        New Budget
      </div>
      <div>
        <TableData
          columnData={BUDGET_COLUMN}
          rowData={monthlyBudget}
          pageSize={4}
          list={list}
        />
      </div>
    </div>
  );
};

export default Budgets;
