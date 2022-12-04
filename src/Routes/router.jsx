import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Pages/Shared/MainLayout";

const routerObj = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h1> Shahoriar </h1>,
      },
    ],
  },
];

const router = createBrowserRouter(routerObj);

export default router;
