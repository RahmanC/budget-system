import Card from "components/Card";
import MonthlyBudget from "components/MonthlyBudget";
import MonthlyExpenses from "components/MonthlyExpenses";
import MonthlyIncome from "components/MonthlyIncome";
import React from "react";
import { useSelector } from "react-redux";

const BudgetManager: React.FC = () => {
  const { userProfile } = useSelector((state: any) => state.auth);

  const user = userProfile?.email?.split("@")[0];

  return (
    <div>
      <div>
        <p className="font-[600] text-[1.5rem]">
          Welcome back, <span className="capitalize">{user}</span>
        </p>
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
      <div>
        <MonthlyIncome />
      </div>
    </div>
  );
};

export default BudgetManager;
