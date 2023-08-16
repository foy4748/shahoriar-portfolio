export default function JobExperiences() {
	return (
		<div>
			<h1 className="title">Job Experiences</h1>
			<ul className="list-disc space-y-3">
				<div className="md:grid grid-cols-2 lg:grid-cols-3 min-h-[135px]">
					<div className="flex items-center">

						<h2 className="font-bold">
							Officer, Research {'&'} Development (Formulation) <br /> INCEPTA PHARMACEUTICALS LTD. <br /> DHAKA,
							BANGLADESH.
						</h2>
					</div>
					<div className="my-8 my-lg-0 flex items-center justify-center">
						<h2 className="font-bold">Aug 2023 – Present</h2>
					</div>
					<figure className="my-4 my-0:md flex items-center justify-center lg:justify-end">
						<img className="max-w-[120px]" src="/logo_incepta.jpg" alt="" />
					</figure>
				</div>
				<li>
					Formulation development of pharmaceutical products.
				</li>

				<hr className="cyan-600" />
				<div className="md:grid grid-cols-2 lg:grid-cols-3">
					<div className="flex items-center">
						<h2 className="font-bold">
							Officer, Production (OSD) <br /> HEALTHCARE PHARMACEUTICALS LTD. <br /> GAZIPUR,
							BANGLADESH.
						</h2>
					</div>
					<div className="my-8 my-lg-0 flex items-center justify-center">
						<h2 className="font-bold">Feb 2022 – Dec 2022</h2>
					</div>
					<figure className="my-4 my-0:md flex items-center justify-center lg:justify-end">
						<img className="max-w-[100px]" src="/logo_healthcare.jpeg" alt="" />
					</figure>
				</div>
				<li>
					Supervised manufacturing process of oral solid dosage form (granulation, encapsulation, compression, coating)				</li>
				<li>
					Evaluated incoming materials
					(API, excipients) and finished products (tablets, capsules) against
					standards.

				</li>
			</ul>
		</div>
	);
}
