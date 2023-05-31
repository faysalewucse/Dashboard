import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "../layout/Main";
import { Dashboard } from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
