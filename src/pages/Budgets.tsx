import TableData from "components/TableData";
import React from "react";
import { BUDGET_COLUMN } from "utils/TableData";

const Budgets = () => {
  return (
    <div>
      <div className="rounded-lg bg-[#15849d] text-white text-center p-2 flex w-max cursor-pointer">
        New Budget
      </div>
      <div>
        <TableData columnData={BUDGET_COLUMN} rowData={[]} />
      </div>
    </div>
  );
};

export default Budgets;
