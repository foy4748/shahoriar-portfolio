import { NavLink } from "react-router-dom";
export default function SubSkills() {
  const activeStyle = {
    padding: "1px 3rem",
    backgroundColor: "#4b6bfb",
    color: "white",
  };
  return (
    <nav>
      <ul className="flex justify-around">
        <NavLink
          to="/skills/lab-skills"
          className="border rounded-md px-8"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Laboratory</li>
        </NavLink>
        <NavLink
          to="/skills/computer-skills"
          className="border rounded-md px-8"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Software</li>
        </NavLink>
      </ul>
    </nav>
  );
}
