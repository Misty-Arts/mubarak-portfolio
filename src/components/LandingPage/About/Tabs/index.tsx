"use client";
import { FC, useCallback, useState } from "react";
import TabContent from "./TabContent";
import TabHeadings from "./TabHeadings";

export enum TabsEnum {
  SKILLS = "Skills",
  EXPERIENCE = "Experience",
  EDUCATION = "Education",
  CERTIFICATION = "Certification",
}

const Tabs: FC = () => {
  const [selectedTab, setSelectedTab] = useState(TabsEnum.SKILLS);

  const updateSelectedTab = useCallback((tab: TabsEnum) => {
    setSelectedTab(tab);
  }, []);

  return (
    <div>
      <TabHeadings
        selectedTab={selectedTab}
        updateSelectedTab={updateSelectedTab}
      />
      <div className="mt-16">
        <TabContent selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default Tabs;
