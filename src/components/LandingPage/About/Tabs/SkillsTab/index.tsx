import { FC } from "react";
import SkillCard from "./SkillCard";
import { skillItems } from "./items";

const SkillsTab: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillItems.map((item, index) => (
        <SkillCard key={index} {...item} />
      ))}
    </div>
  );
};

export default SkillsTab;
