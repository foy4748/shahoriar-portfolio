import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Pages/Shared/MainLayout";

// Home Pages
import Researches from "../Pages/Home/Researches";
import Publications from "../Pages/Home/Publications";
import Internships from "../Pages/Home/Internships";
import LabSkills from "../Pages/Home/LabSkills";
import ComputerSkills from "../Pages/Home/ComputerSkills";

const routerObj = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Researches />,
      },
      {
        path: "/publications",
        element: <Publications />,
      },
      {
        path: "/internships",
        element: <Internships />,
      },
      {
        path: "/lab-skills",
        element: <LabSkills />,
      },
      {
        path: "/computer-skills",
        element: <ComputerSkills />,
      },
    ],
  },
];

const router = createBrowserRouter(routerObj);

export default router;
