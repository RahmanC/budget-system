import { AiOutlineHome } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";

const myRoutes = {
  home: {
    icon: <AiOutlineHome size={20} color="#15849d" />,
    title: "Home",
    path: "/dashboard",
  },
  budget: {
    icon: <GiTakeMyMoney size={20} color="#15849d" />,
    title: "Budgets",
    path: "/budget",
  },
  // expenses: { icon: <AiOutlineHome />, title: "Expenses", path: "/expenses" },
};

export default Object.freeze(myRoutes);
