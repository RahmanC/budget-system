import React, { useState } from "react";
import { Budget, Expense } from "utils/types";

const BudgetManager: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return <div>Budget Manager</div>;
};

export default BudgetManager;
