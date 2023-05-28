import styles from "@/components/LandingPage/LandingPage.module.css";
import { FC } from "react";

export interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  tools?: string;
  software?: string;
}

const SkillCard: FC<SkillCardProps> = ({
  icon,
  title,
  description,
  tools,
  software,
}) => {
  return (
    <div className={`${styles.skill_card} bg-bg p-6`}>
      <div className={styles.skill_inner_card}>
        <span className={styles.skill_inner_card_icon}>{icon}</span>
        <h3 className="text-xl">{title}</h3>
      </div>
      <div className="mt-4">
        <p className="text-grey text-base mb-1">{description}</p>
        {Boolean(tools) && (
          <>
            <h4 className="text-sm text-blue font-bold leading-6">Tools:</h4>
            <p className="text-grey text-base mb-1">{tools}</p>
          </>
        )}

        {Boolean(software) && (
          <>
            <h4 className="text-sm text-blue font-bold leading-6">Software:</h4>
            <p className="text-grey text-base mb-1">{software}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
