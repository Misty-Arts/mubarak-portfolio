import styles from "@/components/LandingPage/LandingPage.module.css";
import { FC, ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  content: string;
}
const ContactCard: FC<ContactCardProps> = ({ icon, title, content }) => {
  return (
    <div
      className={`max-w-389px w-full h-172px p-4 md:p-6 my-12 flex items-center justify-center ${styles.testimonial_card}`}
    >
      <div>
        <div className="flex justify-center items-center mb-7">
          {icon}
          <span className="mr-4"></span>
          <p className="text-lg text-grey">{title}</p>
        </div>
        <p className="text-lg font-semibold text-center">{content}</p>
      </div>
    </div>
  );
};

export default ContactCard;
