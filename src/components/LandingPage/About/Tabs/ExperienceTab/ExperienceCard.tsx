import styles from "@/components/LandingPage/LandingPage.module.css";
import { FC } from "react";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";

export interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  tasks: string[];
  icon: "right" | "left";
  lastItem?: boolean;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  tasks,
  icon,
  lastItem = false,
}) => {
  return (
    <div className="relative">
      <div
        className={`p-4 md:p-8 relative max-w-728px bg-bg z-10 text-grey ${styles.skill_card}`}
      >
        <p className="font-medium">{role}</p>
        <span className="md:flex">
          <p className="text-blue font-medium text-lg leading-32px">
            {company}
          </p>
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
      {!lastItem && (
        <div
          className={`absolute ${
            icon === "right" ? "-right-36" : "-left-36"
          } top-24 z-0`}
        >
          {icon === "right" ? <RightIcon /> : <LeftIcon />}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
