import Heading from "@/components/common/Heading";
import { FC } from "react";
import Tabs from "./Tabs";

const About: FC = () => {
  return (
    <section id="about" className="py-10">
      <div className="custom-container">
        <Heading title="About Me" subtitle="Main Info" />

        <Tabs />
      </div>
    </section>
  );
};

export default About;
