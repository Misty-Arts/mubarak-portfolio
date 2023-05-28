import { FC } from "react";
import { TabsEnum } from ".";

interface TabHeadingsProps {
  selectedTab: TabsEnum;
  updateSelectedTab: (tab: TabsEnum) => void;
}

const TabHeadings: FC<TabHeadingsProps> = ({ selectedTab, updateSelectedTab }) => {
  return (
    <nav className="flex flex-wrap justify-center mt-30 gap-6 mx-auto w-fit">
      <button
        onClick={() => updateSelectedTab(TabsEnum.SKILLS)}
        className={`font-semibold text-base leading-7 ${
          selectedTab === "Skills" ? "btn text-blue" : "text-grey"
        }`}
      >
        Skills
      </button>
      <button
        onClick={() => updateSelectedTab(TabsEnum.EXPERIENCE)}
        className={`font-semibold text-base leading-7 ${
          selectedTab === "Experience" ? "btn text-blue" : "text-grey"
        }`}
      >
        Experience
      </button>
      <button
        onClick={() => updateSelectedTab(TabsEnum.EDUCATION)}
        className={`font-semibold text-base leading-7 ${
          selectedTab === "Education" ? "btn text-blue" : "text-grey"
        }`}
      >
        Education
      </button>
      <button
        onClick={() => updateSelectedTab(TabsEnum.CERTIFICATION)}
        className={`font-semibold text-base leading-7 ${
          selectedTab === "Certification" ? "btn text-blue" : "text-grey"
        }`}
      >
        Certification
      </button>
    </nav>
  );
};

export default TabHeadings;
