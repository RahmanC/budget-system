import Card from "components/Card";
import MonthlyBudget from "components/MonthlyBudget";
import MonthlyExpenses from "components/MonthlyExpenses";
import MonthlyIncome from "components/MonthlyIncome";
import React from "react";
import { useSelector } from "react-redux";

const BudgetManager: React.FC = () => {
  const { userProfile } = useSelector((state: any) => state.auth);
  const { budget, expenses, income } = useSelector(
    (state: any) => state.budget
  );

  const user = userProfile?.username?.split("@")[0];

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

      <div className="flex flex-col md:flex-row gap-2 md:gap-5 ">
        <Card label="Total Balance" value={200000} previous={178000} />
        <Card label="Monthly Income" value={120000} previous={140000} />
        <Card label="Monthly Expenses" value={50000} previous={40000} />
      </div>

      <div className="my-3 flex flex-col md:flex-row gap-5">
        <MonthlyExpenses data={expenses} />
        <MonthlyBudget data={budget} />
      </div>
      <div>
        <MonthlyIncome data={income} />
      </div>
    </div>
  );
};

export default BudgetManager;
