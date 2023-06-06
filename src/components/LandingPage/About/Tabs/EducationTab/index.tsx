import { FC } from "react";
import EducationCard from "./EducationCard";

const educationContents = [
  {
    discipline: "Civil Engineering, B.Sc.",
    school: "Obafemi Awolowo University, Nigeria",
    period: "Dec 2021",
    task: "The Civil Engineering program equips students with the knowledge and skills necessary to excel in the civil and construction industry. Through a combination of industry-relevant coursework and hands-on learning experiences, students develop a strong foundation in areas such as structural design, geotechnical engineering, Water and research and project management. Graduates of the program are prepared to tackle complex challenges and make significant contributions to the field.",
  },
  {
    discipline: "Civil Engineering, Diploma",
    school: "Yaba College of Technology Nigeria",
    period: "Apr 2016",
    task: "The civil engineering diploma program is a hands-on, skill-oriented program that focuses on training students to become proficient in the practical application of civil engineering principles. The program is designed to provide students with a comprehensive understanding of the fundamental concepts of civil engineering, and equip them with the necessary skills to apply these concepts to real-world situations. Graduates of the program will be well-prepared to enter the workforce, and will have a strong foundation upon which to build a successful career in civil engineering.",
  },
];

const EducationTab: FC = () => {
  return (
    <div className="custom-container">
      {educationContents.map(({ discipline, school, period, task }, index) => (
        <div className={`mb-13.5 flex ${index % 2 && "flex justify-end"}`}>
          <EducationCard
            key={`${school}-${index}`}
            discipline={discipline}
            school={school}
            period={period}
            task={task}
          />
        </div>
      ))}
    </div>
  );
};

export default EducationTab;
