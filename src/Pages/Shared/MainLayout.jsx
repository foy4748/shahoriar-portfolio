import {Outlet} from "react-router-dom";
import NavBar from "./Navbar";
import SidePanel from "./SidePanel";

export default function MainLayout() {
	return (
		<main>
			<section className="p-5 grid gap-4 lg:grid-cols-mainLayout">
				<SidePanel />
				<div>
					<NavBar />
					<div className="h-lg-screen h-fit mt-4 px-10 py-5 border rounded-lg">
						<Outlet />
					</div>
				</div>
			</section>
		</main>
	);
}
