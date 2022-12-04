import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import SidePanel from "./SidePanel";

export default function MainLayout() {
  return (
    <main>
      <section className="p-5 grid gap-4 lg:grid-cols-mainLayout">
        <div className="w-full">
          <NavBar />
          <div className="h-screen mt-4 p-4 border rounded-lg">
            <Outlet />
          </div>
        </div>
        <SidePanel />
      </section>
    </main>
  );
}
