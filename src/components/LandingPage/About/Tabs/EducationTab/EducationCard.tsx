import styles from "@/components/LandingPage/LandingPage.module.css";
import { FC } from "react";

export interface EducationCardProps {
  discipline: string;
  school: string;
  period: string;
  task: string;
}

const EducationCard: FC<EducationCardProps> = ({
  discipline,
  school,
  period,
  task,
}) => {
  return (
    <div className={`p-6 max-w-728px text-grey ${styles.skill_card}`}>
      <p className="font-medium">{discipline}</p>
      <span className="md:flex">
        <p className="text-blue font-medium text-lg leading-32px">{school}</p>
        <span className="hidden md:block">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <p> {period}</p>
      </span>
      <div className="mt-4 text-lg leading-22">{task}</div>
    </div>
  );
};

export default EducationCard;
