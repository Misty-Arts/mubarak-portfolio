import styles from "@/components/LandingPage/LandingPage.module.css";
import { FC } from "react";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";

export interface EducationCardProps {
  discipline: string;
  school: string;
  period: string;
  task: string;
  icon: "right" | "left";
  lastItem?: boolean;
}

const EducationCard: FC<EducationCardProps> = ({
  discipline,
  school,
  period,
  task,
  icon,
  lastItem = false,
}) => {
  return (
    <div className="relative">
      <div
        className={`p-6 relative z-10 max-w-728px bg-bg text-grey ${styles.skill_card}`}
      >
        <p className="font-medium">{discipline}</p>
        <span className="md:flex">
          <p className="text-blue font-medium text-lg leading-32px">{school}</p>
          <span className="hidden md:block">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <p> {period}</p>
        </span>
        <div className="mt-4 text-lg leading-22">{task}</div>
      </div>
      {!lastItem && (
        <div
          className={`absolute hidden md:block ${
            icon === "right" ? "-right-36" : "-left-36"
          } top-24 z-0`}
        >
          {icon === "right" ? <RightIcon /> : <LeftIcon />}
        </div>
      )}
    </div>
  );
};

export default EducationCard;
