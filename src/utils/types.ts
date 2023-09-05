export interface Budget {
  id: number;
  name: string;
  amount: number;
  status: string;
}

export interface Expense {
  id: number;
  name: string;
  amount: number;
  status: string;
}

export interface SwapTitleType {
  "/dashboard": string;
  "/budget": string;
  "/expenses": string;
}

export interface NavbarProps {
  title: string;
  username: string;
}

export interface CardProps {
  label: string;
  value: number;
  previous: number;
}

export interface Expense {
  name: string;
  color: string;
  value: number;
  id: number;
  spent: number;
}

export interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export interface ListProps {
  icon: JSX.Element;
  text: string;
  link?: string;
  onClickModal?: any;
}

export interface BudgetItems {
  [key: number]: Budget[];
}
