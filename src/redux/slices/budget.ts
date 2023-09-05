import { createSlice } from "@reduxjs/toolkit";
import { monthlyBudget, monthlyExpenses, monthlyIncome } from "utils/mock";

const initialState = {
  isLoading: false,
  error: false,
  budget: monthlyBudget,
  expenses: monthlyExpenses,
  income: monthlyIncome,
};

const slice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
  },
});

export default slice.reducer;
