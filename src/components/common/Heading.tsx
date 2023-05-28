import { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading: FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <p className="font-bold text-blue text-base md:text-xl">{subtitle}</p>
      <h2 className="font-raleway font-bold text-xl md:text-40px">{title.toUpperCase()}</h2>
    </div>
  );
};

export default Heading;
