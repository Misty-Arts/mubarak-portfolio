import Heading from "@/components/common/Heading";
import Mail from "@/lib/icons/Contact/Mail";
import Phone from "@/lib/icons/Contact/Phone";
import { FC } from "react";
import ContactCard from "./Card";

const contactDetails = [
  { icon: <Phone />, title: "Phone", content: "+2348106084709" },
  { icon: <Mail />, title: "Email", content: "msomuyiwa25@gmail.com" },
  { icon: <Phone />, title: "Address", content: "Lagos, Nigeria" },
];

const Contact: FC = () => {
  return (
    <section id="contact" className="custom-container">
      <Heading title="CONTACT" subtitle="Get in Touch" />
      <div className="md:flex justify-between">
        {contactDetails.map((item) => (
          <ContactCard
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
