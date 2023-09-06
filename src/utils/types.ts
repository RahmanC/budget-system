export interface Budget {
  id: number;
  name: string;
  amount: number;
  status: string;
  spent: number;
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

export interface BudgetState {
  isLoading: boolean;
  error: boolean;
  budget: Budget[];
  budgetItems: any;
  expenses: any[];
  income: any;
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

export interface AppFormProps {
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: React.ReactNode;
  className?: string;
}

export interface AppFieldProps {
  name: string;
  type?: string;
  icon?: React.ReactElement;
  placeholder?: string;
  value?: any;
  options?: any;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: any;
  type?: any;
  disabled?: any;
}

export interface contextProps {
  isMobile: boolean;
  showHamburger: boolean;
  toggleHamburger: () => void;
}

export interface AppProps {
  children: React.ReactNode;
}
