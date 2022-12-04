import { NavLink } from "react-router-dom";
export default function Navbar() {
  const activeStyle = {
    backgroundColor: "#4b6bfb",
    color: "white",
  };
  return (
    <nav>
      <ul className="flex flex-wrap justify-around rounded wrap border lg:py-2">
        <NavLink
          className="border rounded my-1 px-2 py-3"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Researches</li>
        </NavLink>
        <NavLink
          className="border rounded my-1 px-2 py-3"
          to="/publications"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Publications</li>
        </NavLink>
        <NavLink
          className="border rounded my-1 px-2 py-3"
          to="/internships"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Internships</li>
        </NavLink>
        <NavLink
          className="border rounded my-1 px-2 py-3"
          to="/lab-skills"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Lab Skills</li>
        </NavLink>
        <NavLink
          className="border rounded my-1 px-2 py-3"
          to="/computer-skills"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Computer Skills</li>
        </NavLink>
      </ul>
    </nav>
  );
}
