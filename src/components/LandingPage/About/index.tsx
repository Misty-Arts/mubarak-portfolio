import Heading from "@/components/common/Heading";
import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="py-10">
      <div className="custom-container">
        <Heading title="About Me" subtitle="Main Info" />
      </div>
    </section>
  );
};

export default About;
