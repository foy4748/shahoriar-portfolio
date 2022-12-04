import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import SidePanel from "./SidePanel";

export default function MainLayout() {
  return (
    <main>
      <section className="grid lg:grid-cols-mainLayout">
        <div className="w-full">
          <NavBar />
          <div className="h-screen border">
            <Outlet />
          </div>
        </div>
        <SidePanel />
      </section>
    </main>
  );
}
