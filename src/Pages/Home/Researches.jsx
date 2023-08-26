import SubResearches from "../Shared/SubResearches";

export default function Researches() {
  return (
    <div>
      <SubResearches />
      <h1 className="title">Research Experiences</h1>
      <ul className="list-disc space-y-10">
        <li>
          <h2 className=" font-semibold text-lg">DEC 2022 – AUG 2023</h2>
          As a research associate, under the supervision of{" "}
          <a
            className="text-cyan-500"
            href="https://www.du.ac.bd/body/faculty_details/PTCH/1484"
            target={"_blank"}
          >
            Dr. Uttom Kumar
          </a>
          , Dept. of Pharmaceutical Technology, worked on{" "}
          <strong>
            {" "}
            UV-Vis based method development and formulation development for
            anti-hypertensive and anti-diabetic drug
          </strong>{" "}
          at Organic Synthesis Lab, Dept. of Pharmaceutical Technology,
          University of Dhaka
        </li>
        <li>
          <h2 className=" font-semibold text-lg">DEC 2020 – APR 2021</h2>
          Worked with{" "}
          <a
            className="text-cyan-500"
            href="https://www.du.ac.bd/faculty/faculty_details/PTCH/1490"
            target={"_blank"}
          >
            {" "}
            Dr. Raihan Sarkar{" "}
          </a>
          , Dept. of Pharmaceutical Technology, University of Dhaka, and{" "}
          <a
            className="text-cyan-500"
            href="https://www.du.ac.bd/faculty/faculty_details/PTCH/2411"
            target={"_blank"}
          >
            K.M. Yasif Kayes Sikder
          </a>{" "}
          , Dept. of Pharmaceutical Technology, University of Dhaka, on{" "}
          <strong>
            {" "}
            solubility enhancement of BCS Class II drugs by solid dispersion (
            solvent evaporation ) technique
          </strong>{" "}
          at Pharmaceutics Lab, Dept. of Pharmaceutical Technology, University
          of Dhaka, Bangladesh.
        </li>
        <li>
          <h2 className="font-semibold text-lg">APR 2020 - DEC 2020</h2>
          Worked as a Research Assistant with{" "}
          <a
            className="text-cyan-500"
            target={"_blank"}
            href="https://facultyweb.kennesaw.edu/mhalim1/index.php"
          >
            Dr. Mohammad Abdul Halim
          </a>{" "}
          , at Kennesaw State University, on
          <strong>
            {" "}
            in-silico promising peptide therapeutics design against SARS-CoV-2
            main protease{" "}
          </strong>{" "}
          at Red-Green Research Center, Dhaka, Bangladesh.
        </li>
      </ul>
    </div>
  );
}
