import Heading from "@/components/common/Heading";
import { FC } from "react";
import PortfolioItem from "./PortfolioItem";
import { portfolioItems } from "./items";

const Portfolio: FC = () => {
  return (
    <section id="portfolio" className="py-10">
      <div className="custom-container">
        <Heading title="Portfolio" subtitle="My Works" />
        <div className="max-w-1010px mx-auto mt-12">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
