import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  budgetItems,
  monthlyBudget,
  monthlyExpenses,
  monthlyIncome,
} from "utils/mock";
import { Budget, BudgetState } from "utils/types";

const initialState: BudgetState = {
  isLoading: false,
  error: false,
  budget: monthlyBudget,
  budgetItems: budgetItems,
  expenses: monthlyExpenses,
  income: monthlyIncome,
};

const slice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    updateIsLoading(
      state,
      action: PayloadAction<{ isLoading: boolean; error: boolean }>
    ) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },

    addBudgetItems(
      state,
      action: PayloadAction<{ budgetId: number; budgetItem: Budget }>
    ) {
      const { budgetId, budgetItem } = action.payload;
      if (!state.budgetItems[budgetId]) {
        state.budgetItems[budgetId] = [];
      }
      state.budgetItems[budgetId].push(budgetItem);

      const totalAmount = state.budgetItems[budgetId].reduce(
        (total, item) => total + item.amount,
        0
      );
      state.budget[budgetId].spent = totalAmount;
    },

    editBudgetItems(
      state,
      action: PayloadAction<{
        budgetId: number;
        itemId: number;
        updatedBudgetItem: Partial<Budget>;
      }>
    ) {
      const { budgetId, itemId, updatedBudgetItem } = action.payload;
      const budget = state.budgetItems[budgetId];
      if (budget) {
        const index = budget.findIndex((item) => item.id === itemId);
        if (index !== -1) {
          budget[index] = {
            ...budget[index],
            ...updatedBudgetItem,
          };
          // Calculate the total amount and update the spent value in monthlyBudget
          const totalAmount = budget.reduce(
            (total, item) => total + item.amount,
            0
          );
          state.budget[budgetId].spent = totalAmount;
        }
      }
    },

    deleteBudgetItems(
      state,
      action: PayloadAction<{ budgetId: number; itemId: number }>
    ) {
      const { budgetId, itemId } = action.payload;
      const budget = state.budgetItems[budgetId];
      if (budget) {
        state.budgetItems[budgetId] = budget.filter(
          (item) => item.id !== itemId
        );
        // Calculate the total amount and update the spent value in monthlyBudget
        const totalAmount = state.budgetItems[budgetId].reduce(
          (total, item) => total + item.amount,
          0
        );
        state.budget[budgetId].spent = totalAmount;
      }
    },
  },
});

export default slice.reducer;

export function addBudgetItems(budgetId: number, values: any): any {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    dispatch(
      slice.actions.addBudgetItems({
        budgetId: budgetId,
        budgetItem: values,
      })
    );

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

export function editBudgetItems(
  budgetId: number,
  itemId: number,
  updatedBudgetItem: any
): any {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    dispatch(
      slice.actions.editBudgetItems({
        budgetId: budgetId,
        itemId,
        updatedBudgetItem,
      })
    );

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

export function deleteBudgetItems(budgetId: number, itemId: number): any {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    dispatch(
      slice.actions.deleteBudgetItems({
        budgetId: budgetId,
        itemId,
      })
    );

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}
