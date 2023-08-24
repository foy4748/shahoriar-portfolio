import SubExperiences from "../Shared/SubExperiences";

export default function Training() {
	return (
		<div>
			<SubExperiences />
			<h1 className="title">Training</h1>
			<ul className="list-disc space-y-5">
				<div className="lg:flex justify-between items-center">
					<li>
						Internship at Dhaka Medical College and Hospital, Dhaka, Bangladesh (2021)
					</li>
					<figure className="flex justify-center">
						<img className="max-w-[120px] max-h-[120px] object-cover" src="/Dhaka_Medical_College_Hospital.jpg" alt="" />
					</figure>
				</div>
				<div className="lg:flex justify-between items-center">
					<li>
						Internship at Pacific Pharmaceuticals Limited, Narayanganj, Bangladesh (2020)
					</li>
					<figure className="flex justify-center">
						<img className="max-w-[120px] h-[120px]  object-cover" src="./Pacific_Pharma.png" alt="" />
					</figure>
				</div>
				<div className="lg:flex justify-between items-center">
					<li>
						Participated in the “Computer Aided Drug and Peptide Design” training program offered by Red-
						Green Research Center, Dhaka. (2019)
					</li>
					<figure className="flex justify-center">
						<img className="max-w-[120px] max-h-[120px] object-cover" src="./Red_Green_Research_Centre.png" alt="" />
					</figure>

				</div>
			</ul>
		</div>
	);
}

