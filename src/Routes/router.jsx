import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../Pages/Shared/MainLayout";

// Home Pages
import Researches from "../Pages/Home/Researches";
import Publications from "../Pages/Home/Publications";
import JobExperiences from "../Pages/Home/JobExperiences";
import LabSkills from "../Pages/Home/LabSkills";
import ComputerSkills from "../Pages/Home/ComputerSkills";
import Skills from "../Pages/Home/Skills";
import OnGoingProjects from "../Pages/Home/OnGoinProjects";

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
				path: "/job-experiences",
				element: <JobExperiences />,
			},
			{
				path: "/skills/lab-skills",
				element: <LabSkills />,
			},
			{
				path: "/skills/computer-skills",
				element: <ComputerSkills />,
			},
			{
				path: "/ongoing-projects",
				element: <OnGoingProjects />,
			},
		],
	},
];

const router = createBrowserRouter(routerObj);

export default router;
