import styles from "@/components/LandingPage/LandingPage.module.css";
import Link from "next/link";
import { FC } from "react";

export interface CertificationCardProps {
  field: string;
  company: string;
  period: string;
  id: string;
  url: string;
}

const CertificationCard: FC<CertificationCardProps> = ({
  field,
  company,
  period,
  id,
  url,
}) => {
  return (
    <div
      className={`p-4 md:p-6 max-w-728px w-full text-grey ${styles.skill_card}`}
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
          <Link href={url}> Credential URL </Link>
        </ul>
      </div>
    </div>
  );
};

export default CertificationCard;
