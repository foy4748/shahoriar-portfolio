export default function SidePanel() {
	return (
		<aside className="p-5 h-100 rounded-lg border order-first lg:order-1">
			<picture className="flex justify-center">
				<img
					className="rounded-lg w-40"
					src="/Shahoriar.png"
					alt="Shahoriar's Profile Picture"
				/>
			</picture>
			<div className="text-center">
				<h1 className="text-lg mt-5">Md. Shahoriar Nazir</h1>
				<p className="font-bold">M. Pharm, B. Pharm</p>
				<p>University of Dhaka</p>
				<h2 className="mt-3">-- Contact Info --</h2>
				<p>
					Email:{" "}
					<a href="mailto:mdshahoriarnazir@gmail.com">
						mdshahoriarnazir@gmail.com
					</a>{" "}
				</p>
				<p>
					Phone: <a href="tel:+8801841653737">+8801841653737</a>
				</p>
				<h2 className="mt-3">-- Mailing Address --</h2>
				<p>House Name: Sufia Villa</p>
				<p>House No. 213/5/4A Shapla Housing</p>
				<p>West Agargaon, Dhaka - 1207</p>
			</div>
		</aside>
	);
}
