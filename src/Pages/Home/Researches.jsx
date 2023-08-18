import SubResearches from "../Shared/SubResearches";

export default function Researches() {
	return (
		<div>
			<SubResearches />
			<h1 className="title">Research Experiences</h1>
			<ul className="list-disc space-y-10">
				<li>
					<h2 className=" font-semibold text-lg">DEC 2022 – AUG 2023</h2>
					As a research associate, under the supervision of Dr. Uttom Kumar, Assistant
					Professor, Dept. of Pharmaceutical Technology, worked on
					UV-Spectroscopy based method development and formulation development
					for anti-hypertensive and anti-diabetic drug at Organic Synthesis Lab,
					Dept. of Pharmaceutical Technology, University of Dhaka
				</li>
				<li>
					<h2 className=" font-semibold text-lg">DEC 2020 – APR 2021</h2>
					Worked with Dr. Raihan Sarkar, Assistant Professor, Dept. of
					Pharmaceutical Technology, University of Dhaka, and K.M. Yasif Kayes
					Sikder, Assistant Professor, Dept. of Pharmaceutical Technology,
					University of Dhaka, on solubility enhancement of BCS Class II drugs
					by solvent evaporation technique at Pharmaceutics Lab, University of
					Dhaka, Bangladesh.
				</li>
				<li>
					<h2 className="font-semibold text-lg">APR 2020 - DEC 2020</h2>
					Worked as a Research Assistant with Dr. Mohammad Abdul Halim,
					Assistant Professor of Chemistry and Biochemistry at Kennesaw State
					University, on in-silico promising peptide therapeutics design against
					SARS-CoV-2 main protease at Red-Green Research Center, Dhaka,
					Bangladesh.
				</li>
			</ul>
		</div>
	);
}
