import {NavLink} from "react-router-dom";
export default function Navbar() {
	const activeStyle = {
		backgroundColor: "#4b6bfb",
		color: "white",
	};
	return (
		<nav>
			<ul className="flex flex-wrap justify-evenly rounded-lg wrap border py-2">
				<NavLink
					className="border rounded-lg my-1 px-2 py-3"
					to="/"
					style={({isActive}) => (isActive ? activeStyle : undefined)}
				>
					<li>Researches</li>
				</NavLink>
				<NavLink
					className="border rounded-lg my-1 px-2 py-3"
					to="/publications"
					style={({isActive}) => (isActive ? activeStyle : undefined)}
				>
					<li>Publications</li>
				</NavLink>
				<NavLink
					className="border rounded-lg my-1 px-2 py-3"
					to="/experiences"
					style={({isActive}) => (isActive ? activeStyle : undefined)}
				>
					<li>Experiences</li>
				</NavLink>
				{/*
        <NavLink
          className="border rounded-lg my-1 px-2 py-3"
          to="/skills/lab-skills"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Lab Skills</li>
        </NavLink>
				*/}
				<NavLink
					className="border rounded-lg my-1 px-2 py-3"
					style={({isActive}) => (isActive ? activeStyle : undefined)}
					to="/skills/lab-skills"
				>
					<li>Competency</li>
				</NavLink>
				<NavLink
					className="border rounded-lg my-1 px-2 py-3"
					style={({isActive}) => (isActive ? activeStyle : undefined)}
					to="/about"
				>
					<li>About Me</li>
				</NavLink>
			</ul>
		</nav>
	);
}
