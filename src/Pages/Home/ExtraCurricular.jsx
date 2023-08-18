import SubExperiences from "../Shared/SubExperiences";

export default function ExtraCurricular(params) {
  return (
    <div>
      <SubExperiences />
      <h1 className="title">Extracurricular Activities</h1>
      <ul className="list-disc space-y-5">
        <h2 className="font-semibold text-lg">Social Work</h2>
        <li>
          Former Member and Assistant Association Secretary of Badhan, Dr.
          Muhammad Shahidullah Hall unit (A Voluntary Blood Donors'
          Organization). (2017-18)
        </li>
        <li>
          Volunteered for Bangladesh Biology Olympiad in a promotional campaign
          in Bogura, Bangladesh. (2018)
        </li>

        <h2 className="font-semibold text-lg">Competition</h2>
        <li>
          Participated in ‘Bangla Wikipedia Nibondha Protijogyta 2023’
          (Translated “Pharmacy” wiki English article to Bangla) (2023)
        </li>
        <li>
          Participated in ‘Bangla Wikipedia Nibondha Protijogyta 2019‘
          (Translated “Bangkok” English article to Bangla) (2019)
        </li>
        <li>
          Delivered poster presentation on The History of Pharmacy at the World
          Pharmacist Day 2016 event arranged by the Department. of Pharmacy,
          University of Dhaka. (2016).
        </li>
      </ul>
    </div>
  );
}
