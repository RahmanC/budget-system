import TableData from "components/TableData";
import React, { useEffect, useState } from "react";
import { BUDGET_ITEMS_COLUMN } from "utils/TableColumns";
import { budgetItems } from "utils/mock";
import { Budget, ListProps } from "utils/types";
import { FaPen, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Modal from "components/Modal";
import AppButton from "components/AppButton";
import NewBudgetForm from "components/forms/NewBudgetForm";

const BudgetItems = () => {
  const { id } = useParams();
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [newModal, setNewModal] = useState(false);
  const [budgetData, setBudgetData] = useState<Budget[]>([]);

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

  //generate new id for the newly added item
  const generateUniqueId = () => {
    let maxId = 0;
    for (const key in budgetData) {
      if (budgetData.hasOwnProperty(key)) {
        maxId = Math.max(maxId, parseInt(key));
      }
    }
    return maxId + 1;
  };

  const handleAddItem = (values: any) => {
    const newItemId = generateUniqueId();
    const newItem = {
      id: newItemId,
      ...values,
    };
    setBudgetData([...budgetData, newItem]);
  };

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
      <div className="flex justify-end">
        <AppButton label="New Budget Item" onClick={() => setNewModal(true)} />
      </div>
      <div>
        <TableData
          columnData={BUDGET_ITEMS_COLUMN}
          rowData={budgetData}
          list={list}
        />
      </div>

      {editModal && <Modal handleClose={() => setEditModal(false)}>edit</Modal>}
      {newModal && (
        <Modal handleClose={() => setNewModal(false)}>
          <NewBudgetForm manageItem={handleAddItem} />
        </Modal>
      )}
    </div>
  );
};

export default BudgetItems;
