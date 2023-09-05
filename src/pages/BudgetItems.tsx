import TableData from "components/TableData";
import React, { useEffect, useState } from "react";
import { BUDGET_ITEMS_COLUMN } from "utils/TableColumns";
import { budgetItems } from "utils/mock";
import { Budget, ListProps } from "utils/types";
import { FaPen, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Modal from "components/Modal";

const BudgetItems = () => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const list: ListProps[] = [
    {
      icon: <FaPen size={12} color="#15849d" />,
      text: "Update budget",
      onClickModal: () => setEditModal(!editModal),
    },
    {
      icon: <FaTrash size={12} color="tomato" />,
      text: "Delete Budget",
      onClickModal: () => setDeleteModal(!deleteModal),
    },
  ];
  const { id } = useParams();

  const [budgetData, setBudgetData] = useState<Budget[]>([]);

  useEffect(() => {
    if (id !== undefined && budgetItems.hasOwnProperty(id)) {
      const data = budgetItems[id];
      setBudgetData(data);
    } else {
      // Handle the case when id is undefined or not found in budgetItems
      setBudgetData([]);
    }
  }, [id]);

  return (
    <div>
      <div className="rounded-lg bg-[#15849d] text-white text-center p-2 flex w-max cursor-pointer">
        New Budget
      </div>
      <div>
        <TableData
          columnData={BUDGET_ITEMS_COLUMN}
          rowData={budgetData}
          list={list}
        />
      </div>

      {editModal && <Modal handleClose={() => setEditModal(false)}>edit</Modal>}
    </div>
  );
};

export default BudgetItems;