import {NavLink} from "react-router-dom";
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
					to="/about"
					className="border rounded-md px-8"
					style={({isActive}) => (isActive ? activeStyle : undefined)}
				>
					<li>About</li>
				</NavLink>
				<NavLink
					to="/award-n-honors"
					className="border rounded-md px-8"
					style={({isActive}) => (isActive ? activeStyle : undefined)}
				>
					<li>Awards / Honours</li>
				</NavLink>
			</ul>
		</nav>
	);
}

