export interface Budget {
  id: number;
  name: string;
  totalAmount: number;
  status: string;
}

export interface Expense {
  id: number;
  name: string;
  amount: number;
  status: string;
}
