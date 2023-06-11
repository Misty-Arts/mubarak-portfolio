import styles from "@/components/LandingPage/LandingPage.module.css";
import LeftQuote from "@/lib/icons/Testimoial/LeftQuote";
import RightQuote from "@/lib/icons/Testimoial/RightQuote";
import Image from "next/image";
import { FC } from "react";

interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  position: string;
  testimony: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  imageSrc,
  name,
  position,
  testimony,
}) => {
  return (
    <div
      className={`max-w-682px w-full p-6 my-12 mx-auto ${styles.testimonial_card}`}
    >
      <div className="md:flex items-center mx-auto md:gap-6 w-fit">
        <div className="w-15 h-15 relative">
          <Image
            src={imageSrc}
            alt="Image of testimonial"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-left">
          <p className="font-bold md:text-lg leading-22">{name}</p>
          <p className="text-blue text-base md:text-sm">{position}</p>
        </div>
      </div>
      <div className="relative my-4">
        <span className="absolute -left-3 -top-3">
          <LeftQuote />
        </span>
        <p className="text-sm px-4 text-left">{testimony}</p>
        <span className="absolute -right-3 -bottom-3">
          <RightQuote />
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
