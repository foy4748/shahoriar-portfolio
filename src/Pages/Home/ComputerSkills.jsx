import SubSkills from "../Shared/SubSkills";

export default function ComputerSkills() {
	return (
		<div className="w-full">
			<SubSkills />
			<h1 className="title">Computer Skills</h1>
			<ul className="list-disc space-y-3">
				<li>Gaussian09 (Chemical structure drawing, optimization)</li>
				<li>
					PyMol (Visualization and analysis of 3D protein structure,
					protein-drug complex)
				</li>
				<li>
					UCSF Chimera (Visualization analysis of 3D protein structure,
					protein-drug complex)
				</li>
				<li>
					BIOVIA Discovery Studio (Visualization and analysis of 3D protein
					structure, protein-drug complex)
				</li>
				<li>Microsoft Office (MS Word, MS PowerPoint, MS Excel)</li>
				<li>PyRx (Small molecule docking with Target protein)</li>
				<li>
					YASARA (Molecular dynamic simulation of docked complex implementing
					built-in scripts)
				</li>
				<li>
					SAP (Basic material management tasks: process order creation, entry of
					the available raw materials, goods issue of a processed product)
				</li>
			</ul>
		</div>
	);
}
