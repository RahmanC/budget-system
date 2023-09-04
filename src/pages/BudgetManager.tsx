import Card from "components/Card";
import MonthlyBudget from "components/MonthlyBudget";
import MonthlyExpenses from "components/MonthlyExpenses";
import React, { useState } from "react";
import { monthlyExpenses } from "utils/mock";
import { Budget, Expense } from "utils/types";

const BudgetManager: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <div>
      <div>
        <p className="font-[600] text-[1.5rem]">Welcome back, Emmanuel</p>
        <p className="text-[#797777] text-[0.8rem]">
          Your dashboard details today
        </p>
      </div>

      <div className="flex gap-5 ">
        <Card label="Total Balance" value={200000} previous={178000} />
        <Card label="Monthly Income" value={120000} previous={140000} />
        <Card label="Monthly Expenses" value={50000} previous={40000} />
      </div>

      <div className="my-3 flex gap-5">
        <MonthlyExpenses />
        <MonthlyBudget />
      </div>
    </div>
  );
};

export default BudgetManager;
