import { FC } from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceItems } from "./items";

const ExperienceTab: FC = () => {
  return (
    <section className="custom-container">
      {experienceItems.map((item, index) => (
        <div
          className={`relative mb-6 md:mb-13.5 flex ${index % 2 ? "flex justify-end" : ""}`}
        >
          <ExperienceCard
            key={`${item.company}-${index}`}
            role={item.role}
            company={item.company}
            period={item.period}
            tasks={item.tasks}
            icon={index % 2 ? "left" : "right"}
            lastItem={index === experienceItems.length - 1}
          />
        </div>
      ))}
    </section>
  );
};

export default ExperienceTab;
