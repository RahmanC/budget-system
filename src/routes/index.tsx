import AppLayout from "layouts/AppLayout";
import React, { Suspense, lazy, ComponentType } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { DEFAULT_PATH } from "./config";

const Loadable = (Component: ComponentType<any>) => (props: any) => {
  return (
    <Suspense fallback={"Loading..."}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "budget", element: <BudgetManager /> },
      ],
    },
  ]);
}

const BudgetManager = Loadable(lazy(() => import("pages/BudgetManager")));
