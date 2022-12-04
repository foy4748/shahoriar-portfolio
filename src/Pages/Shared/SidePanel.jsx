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
        <p>Bachelor of Pharmacy (B. Pharm)</p>
        <p>CGPA 3.43 (Out of 4.00) </p>
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
        <p>Dr. Muhammad Shahidullah Hall,</p>
        <p>Shaheed Ataur Rahman Khan Khadim Bhaban (Ex-2)</p>
        <p>Room no: 2515, Dr. Muhammad Shahidullah Hall</p>
        <p>University of Dhaka, Dhaka-1000</p>
      </div>
    </aside>
  );
}
