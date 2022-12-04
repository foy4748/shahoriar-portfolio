import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-wrap justify-around wrap border">
        <li>
          <NavLink to="/">Researches</NavLink>
        </li>
        <li>
          <NavLink to="/publications">Publications</NavLink>
        </li>
        <li>
          <NavLink to="/internships">Internships</NavLink>
        </li>
        <li>
          <NavLink to="/lab-skills">Lab Skills</NavLink>
        </li>
        <li>
          <NavLink to="/computer-skills">Computer Skills</NavLink>
        </li>
      </ul>
    </nav>
  );
}
