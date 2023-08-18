import { NavLink } from "react-router-dom";
export default function SubExperiences() {
  const activeStyle = {
    padding: "1px 3rem",
    backgroundColor: "#4b6bfb",
    color: "white",
  };
  return (
    <nav>
      <ul className="flex justify-around">
        <NavLink
          to="/experiences"
          className="border rounded-md px-8"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Job Experiences</li>
        </NavLink>
        <NavLink
          to="/training"
          className="border rounded-md px-8"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Training</li>
        </NavLink>
        <NavLink
          to="/extra-activites"
          className="border rounded-md px-8"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Others</li>
        </NavLink>
      </ul>
    </nav>
  );
}
