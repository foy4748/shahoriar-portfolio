import SubSkills from "../Shared/SubSkills";

export default function LabSkills() {
  return (
    <div>
      <SubSkills />
      <h1 className="title">LabSkills</h1>
      <ul className="list-disc space-y-3">
        <li>
          <strong className="font-medium">
            {" "}
            USP II dissolution apparatus{" "}
          </strong>
          (Dissolution Study)
        </li>
        <li>
          <strong className="font-medium"> Ultraviolet-Visible </strong>(UV-VIS)
          Spectroscopy (Dissolution Solution Analysis)
        </li>
        <li>
          <strong className="font-medium">
            Fourier-transform Infrared spectroscopy{" "}
          </strong>
          (Drug-Excipient interaction determination)
        </li>
        <li>
          <strong className="font-medium">
            High-Performance Liquid Chromatography{" "}
          </strong>
          (Method development)
        </li>
      </ul>
    </div>
  );
}
