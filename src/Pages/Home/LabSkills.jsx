import SubSkills from "../Shared/SubSkills";

export default function LabSkills() {
	return (
		<div>
			<SubSkills />
			<h1 className="title">Instruments</h1>
			<ul className="list-disc space-y-3">
				<li>
					<strong className="font-medium">
						{" "}
						USP II dissolution apparatus{" "}
					</strong>
					(Dissolution Study)
				</li>
				<figure className="flex items-center justify-center">
					<img className="max-w-[300px]" src="/equipement_dissolution_apparatus.png" alt="" />
				</figure>
				<li>
					<strong className="font-medium"> Ultraviolet-Visible </strong>(UV-VIS)
					Spectroscopy (Dissolution Solution Analysis)
				</li>
				<figure className="flex items-center justify-center">
					<img className="max-w-[300px]" src="/equipment_uv_1800_shimazdu-removebg-preview.png" alt="" />
					<img className="max-w-[300px]" src="/equipment_uv_spectro_photometer.jpg" alt="" />
				</figure>
				<li>
					<strong className="font-medium">
						Fourier-transform Infrared spectroscopy{" "}
					</strong>
					(Drug-Excipient interaction determination)
				</li>
				<figure className="flex items-center justify-center">
					<img className="max-w-[300px]" src="/equipment_FTIR-removebg-preview.png" alt="" />
				</figure>
				<li>
					<strong className="font-medium">
						High-Performance Liquid Chromatography{" "}
					</strong>
					(Method development)
				</li>
				<figure className="flex items-center justify-center">
					<img className="max-w-[300px]" src="/equipment_hplc.jpeg" alt="" />
				</figure>
			</ul>
		</div>
	);
}
