import styles from "@/components/LandingPage/LandingPage.module.css";
import { FC } from "react";

export interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  tasks,
}) => {
  return (
    <div className={`p-4 md:p-8 max-w-728px text-grey ${styles.skill_card}`}>
      <p className="font-medium">{role}</p>
      <span className="md:flex">
        <p className="text-blue font-medium text-lg leading-32px">{company}</p>
        <span className=" hidden md:block">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <p> {period}</p>
      </span>
      <div className="px-4 mt-4">
        {tasks.map((task, index) => (
          <ul key={`task-${index}`} className="list-disc">
            <li>{task} </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
