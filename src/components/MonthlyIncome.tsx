import React from "react";
import { monthlyIncome } from "utils/mock";

const MonthlyIncome: React.FC = () => {
  // Calculate the total monthly expenses amount
  const totalExpenses = monthlyIncome.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="bg-white shadow-inner w-1/2  p-5 rounded-lg flex flex-col">
      <p className="font-[600] text-[1rem] text-[#666666] mb-3">
        Monthly Expenses Breakdown
      </p>
      <div className="flex flex-row h-[1rem]">
        {monthlyIncome.map((expense) => (
          <div
            key={expense.id}
            className=" text-transparent"
            style={{
              background: expense.color,
              width: `${(expense.amount / totalExpenses) * 100}%`,
            }}
          >
            <p>{expense.name}</p>
          </div>
        ))}
      </div>
      {monthlyIncome.map((expense) => {
        const percentage = (expense.amount / totalExpenses) * 100;

        return (
          <div className="mt-[2rem] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ background: expense.color }}
              ></div>
              <p>{expense.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#706d6d] text-[0.8rem]">
                ₦
                {expense.amount.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="font-[600] text-[0.9rem]">
                {percentage.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
                %
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyIncome;
