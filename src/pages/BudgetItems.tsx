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
import EditBudgetForm from "components/forms/EditBudgetForm";

const BudgetItems = () => {
  const { id } = useParams();
  const [editModal, setEditModal] = useState<Budget | null>(null);
  const [deleteModal, setDeleteModal] = useState<Budget | null>(null);
  const [newModal, setNewModal] = useState(false);
  const [budgetData, setBudgetData] = useState<Budget[]>([]);

  const list: ListProps[] = [
    {
      icon: <FaPen size={12} color="#15849d" />,
      text: "Update budget",
      onClickModal: (data: Budget) => setEditModal(data),
    },
    {
      icon: <FaTrash size={12} color="tomato" />,
      text: "Delete Budget",
      onClickModal: (data: Budget) => setDeleteModal(data),
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

  // Add new budget
  const handleAddItem = (values: any) => {
    const newItemId = generateUniqueId();
    const newItem = {
      id: newItemId,
      ...values,
    };
    setBudgetData([...budgetData, newItem]);
    setNewModal(false);
  };

  // edit budget
  const handleEditItem = (editedItem: any) => {
    const itemIndex = budgetData.findIndex((item) => item.id === editedItem.id);

    if (itemIndex !== -1) {
      const updatedBudgetData = [...budgetData];
      updatedBudgetData[itemIndex] = editedItem;
      setBudgetData(updatedBudgetData);
      setEditModal(null);
    }
  };

  //Delete budget
  const handleDeleteItem = (itemToDelete: any) => {
    const updatedBudgetData = budgetData.filter(
      (item) => item.id !== itemToDelete.id
    );

    setBudgetData(updatedBudgetData);

    setDeleteModal(null);
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

      {editModal && (
        <Modal handleClose={() => setEditModal(null)}>
          <EditBudgetForm itemData={editModal} manageItem={handleEditItem} />
        </Modal>
      )}
      {newModal && (
        <Modal handleClose={() => setNewModal(false)}>
          <NewBudgetForm manageItem={handleAddItem} />
        </Modal>
      )}

      {deleteModal && (
        <Modal handleClose={() => setDeleteModal(null)}>
          <p className="text-center font-[600]">Are you sure?</p>
          <div className="flex justify-between mt-5 gap-5 w-[100%]">
            <AppButton
              label="Cancel"
              onClick={() => setDeleteModal(null)}
              style={{ padding: "10px", fontSize: "13px" }}
            />
            <AppButton
              label="Delete"
              onClick={() => handleDeleteItem(deleteModal)}
              style={{
                background: "tomato",
                fontSize: "13px",
                padding: "10px",
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BudgetItems;
