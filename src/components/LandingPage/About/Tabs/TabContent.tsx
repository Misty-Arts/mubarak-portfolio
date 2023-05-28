import { FC } from "react";
import { TabsEnum } from ".";
import CertificationTab from "./CertificationTab";
import EducationTab from "./EducationTab";
import ExperienceTab from "./ExperienceTab";
import SkillsTab from "./SkillsTab";

interface TabContentProps {
  selectedTab: string;
}

const TabContent: FC<TabContentProps> = ({ selectedTab }) => {
  return (
    <>
      {selectedTab === TabsEnum.SKILLS && <SkillsTab />}
      {selectedTab === TabsEnum.EXPERIENCE && <ExperienceTab />}
      {selectedTab === TabsEnum.EDUCATION && <EducationTab />}
      {selectedTab === TabsEnum.CERTIFICATION && <CertificationTab />}
    </>
  );
};

export default TabContent;
