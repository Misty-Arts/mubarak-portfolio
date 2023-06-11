import { FC } from "react";
import CertificationCard from "./CertificationCard";

const certificationItems = [
  {
    field: "Product Design Certification",
    company: "Ingressive for Good & Zuri Team, Inc.",
    period: "Sept 2022",
    id: "Skills and Tools: User Experience Design (UED) · User Interface Design · Responsive Web Design · Interaction Design · Design Research · Wireframing · User Experience (UX) · Project Planning · Analytical Skills · figma · Prototyping · Miro · Google sheets, forms and docs",
    url: "https://drive.google.com/file/d/1F-dszJwsbjRlezoQ9T9i3PAJF0KkDvWo/view",
  },
  {
    field: "Product Design (UX/UI) Certificate",
    company: "Side Hustle, Cohort 4",
    period: "Oct 2021",
    id: "Credential ID: SH-IT-0060235",
    url: "https://drive.google.com/file/d/1FYG4Vo7Dh2b2FgIPzB0UsmjUzNZcZAON/view",
  },
  {
    field: "Soft Skill Certification",
    company: "Jobberman Nigeria",
    period: "Oct 2021",
    id: "Credential ID: 5065680",
    url: "https://drive.google.com/file/d/1tuV8ss4yUXD30drhHvXByfCzY6qien7N/view",
  },
];

const CertificationTab: FC = () => {
  return (
    <div className="custom-container">
      {certificationItems.map(({ field, company, period, id, url }, index) => (
        <div className={`mb-13.5 flex ${index % 2 && "flex justify-end"}`}>
          <CertificationCard
            key={`${company}-${index}`}
            field={field}
            company={company}
            period={period}
            id={id}
            url={url}
            icon={index % 2 ? "left" : "right"}
            lastItem={index === certificationItems.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default CertificationTab;
