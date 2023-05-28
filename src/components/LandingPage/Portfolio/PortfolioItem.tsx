import ArrowRight from "@/lib/icons/Hero/ArrowRight";
import ArrowTopRight from "@/lib/icons/Hero/ArrowTopRight";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "../LandingPage.module.css";

export interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  dateInterval: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  title,
  description,
  image,
  link,
  dateInterval,
}) => {
  return (
    <div className="flex flex-wrap items-center md:flex-row-reverse mb-12 md:mb-24">
      <div className="w-full md:w-1/2 ml-auto h-400px max-w-500px relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="w-full md:w-1/2">
        <div className="max-w-414px">
          <h2 className="text-xl mt-4 md:mt-0 font-bold font-raleway">
            {title}
          </h2>
          <p className="text-sm leading-6 mb-6 text-faint-grey">
            {dateInterval}
          </p>
          <p className="text-base mb-3">{description}</p>
          <Link
            className={`text-blue text-base leading-7 font-raleway font-bold ${styles.arrow} items-center flex gap-1`}
            href={link}
          >
            <span className={styles.arrow_top_right}>
              <ArrowTopRight />
            </span>
            <span className={`hidden ${styles.arrow_right}`}>
              <ArrowRight />
            </span>
            VIEW CASE STUDY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
