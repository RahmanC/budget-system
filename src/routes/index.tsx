import AppLayout from "layouts/AppLayout";
import React, { Suspense, lazy, ComponentType } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { DEFAULT_PATH } from "./config";
import AuthLayout from "layouts/AuthLayout";
import { useSelector } from "react-redux";

const Loadable = (Component: ComponentType<any>) => (props: any) => {
  return (
    <Suspense fallback={"Please wait..."}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  return useRoutes(
    isLoggedIn
      ? [
          {
            path: "/",
            element: <AppLayout />,
            children: [
              {
                element: <Navigate to={DEFAULT_PATH} replace />,
                index: true,
              },
              { path: "dashboard", element: <BudgetManager /> },
              { path: "budget", element: <Budgets /> },
              { path: "budget/:id", element: <BudgetItems /> },
            ],
          },
        ]
      : [
          {
            path: "/",
            element: <AuthLayout />,
            children: [
              {
                element: <Navigate to="/login" replace />,
                index: true,
              },
              { path: "login", element: <Login /> },
            ],
          },
        ]
  );
}

const BudgetManager = Loadable(lazy(() => import("pages/BudgetManager")));
const Budgets = Loadable(lazy(() => import("pages/Budgets")));
const BudgetItems = Loadable(lazy(() => import("pages/BudgetItems")));
const Login = Loadable(lazy(() => import("pages/Login")));
