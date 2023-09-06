import React from "react";
import { useNavigate } from "react-router-dom";

const MonthlyBudget = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-inner w-full md:w-1/2  p-5 rounded-lg flex flex-col cursor-pointer"
      onClick={() => navigate("/budget")}
    >
      <p className="font-[600] text-[1rem] text-[#666666] mb-3">
        Monthly Budget Breakdown
      </p>

      {data.map((budget) => {
        // Calculate the percentage spent
        const percentageSpent = (budget.spent / budget.amount) * 100;

        const fromColor = "#eef9ee";
        const toColor = "#38a169";
        const gradientStyle = {
          background: `linear-gradient(90deg, ${fromColor} ${
            100 - percentageSpent
          }%, ${toColor} ${100 - percentageSpent}%)`,
        };

        return (
          <div key={budget.id}>
            <div className="mt-[2rem] flex items-center justify-between">
              <p>{budget.name}</p>

              <p className="text-[#706d6d] text-[0.8rem]">
                ₦
                {budget.spent?.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{" "}
                /{" "}
                <span className="text-[#66666] font-[600] text-[0.9rem]">
                  ₦
                  {budget.amount?.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </p>
            </div>
            <div
              className="bg-[#eef9ee] w-[100%] p-1 rounded-lg"
              style={gradientStyle}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyBudget;
