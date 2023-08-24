import {NavLink} from "react-router-dom";
export default function SubResearches() {
	const activeStyle = {
		padding: "1px 3rem",
		backgroundColor: "#4b6bfb",
		color: "white",
	};
	return (
		<nav>
			<ul className="flex justify-around">
				<NavLink
					to="/"
					className="border rounded-md px-8"
					style={({isActive}) => (isActive ? activeStyle : undefined)}
				>
					<li>Research Experiences</li>
				</NavLink>
				<NavLink
					to="/ongoing-projects"
					className="border rounded-md px-8"
					style={({isActive}) => (isActive ? activeStyle : undefined)}
				>
					<li>Current Research</li>
				</NavLink>
			</ul>
		</nav>
	);
}

