import Heading from "@/components/common/Heading";
import { FC } from "react";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";
import { largeCardItems, smallCardItems } from "./variables";

const Articles: FC = () => {
  return (
    <section className="custom-container my-16 md:my-32">
      <Heading subtitle="Thought Provoking" title="ARTICLES" />
      <div className="flex justify-between mt-6 md:mt-12">
        <div className="max-w-528px w-full">
          {largeCardItems.map((item, index) => (
            <LargeCard
              key={`${item.topic}-${index}`}
              topic={item.topic}
              content={item.content}
            />
          ))}
        </div>

        <div className="border-grey border-l-2 max-w-350px w-full px-2">
          <p className="font-medium text-sm text-grey">
            Articles by Mubaraq Somuyiwa
          </p>
          {smallCardItems.map((item, index) => (
            <SmallCard
              key={`${item.topic}-${index}`}
              date={item.date}
              time={item.time}
              topic={item.topic}
              keywords={item.keywords}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
