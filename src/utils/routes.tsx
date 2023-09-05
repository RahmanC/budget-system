import { AiOutlineHome } from "react-icons/ai";

const myRoutes = {
  home: { icon: <AiOutlineHome />, title: "Home", path: "/" },
  budget: { icon: <AiOutlineHome />, title: "Budgets", path: "/budget" },
  expenses: { icon: <AiOutlineHome />, title: "Expenses", path: "/expenses" },
};

export default Object.freeze(myRoutes);
