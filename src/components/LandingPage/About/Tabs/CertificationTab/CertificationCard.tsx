import styles from "@/components/LandingPage/LandingPage.module.css";
import { FC } from "react";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";

export interface CertificationCardProps {
  field: string;
  company: string;
  period: string;
  id: string;
  url: string;
  icon: "right" | "left";
  lastItem?: boolean;
}

const CertificationCard: FC<CertificationCardProps> = ({
  field,
  company,
  period,
  id,
  url,
  icon,
  lastItem = false,
}) => {
  return (
    <div className="relative">
      <div
        className={`p-4 md:p-6 relative z-10 bg-bg max-w-728px w-screen text-grey ${styles.skill_card}`}
      >
        <p className="font-medium text-xl leading-32px">{field}</p>
        <span className="md:flex">
          <p className="text-blue font-bold text-sm">{company}</p>
          <span className="hidden md:block">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <p className="text-sm"> {period}</p>
        </span>
        <div className="px-4 mt-4">
          <ul className="list-disc leading-28px mb-1">
            <li>{id} </li>
          </ul>
          <ul className="list-disc underline">
            <a href={url} target="_blank" rel="noopener noreferrer">Credential URL</a>
          </ul>
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

export default CertificationCard;
