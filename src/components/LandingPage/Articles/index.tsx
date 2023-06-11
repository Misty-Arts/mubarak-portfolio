"use client";
import Heading from "@/components/common/Heading";
import { FC, useCallback, useState } from "react";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";
import { largeCardItems } from "./variables";

const Articles: FC = () => {
  const [largeCards, setLargeCards] = useState(largeCardItems);

  const handleCardClick = useCallback(
    (topic: string) => () => {
      const newCards = [...largeCards];
      const card = newCards.find((item) => item.topic === topic);
      const cardIndex = newCards.findIndex((item) => item.topic === topic);
      newCards.splice(cardIndex, 1);
      newCards.unshift(card!);
      setLargeCards(newCards);
    },
    []
  );

  return (
    <section id="articles" className="custom-container my-16 md:my-32">
      <Heading subtitle="Thought Provoking" title="ARTICLES" />
      <div className="flex justify-between mt-6 md:mt-12">
        <div className="min-h-96 w-full md:max-w-528px mx-auto mt-36 mb-16 relative">
          {largeCards.map((item, index) => (
            <LargeCard handleCardClick={handleCardClick} key={`${item.topic}-${index}`} {...item} index={index} />
          ))}
        </div>

        <div className="hidden md:block border-grey border-l-2 max-w-350px w-full px-2">
          <p className="font-medium text-sm text-grey mb-4">
            Articles by Mubaraq Somuyiwa
          </p>
          {largeCardItems.map((item, index) => (
            <SmallCard
              key={`${item.topic}-${index}`}
              date={item.date}
              time={item.time}
              topic={item.topic}
              color={item.color}
              showColor={largeCards[0].color === item.color}
              keywords={item.keywords}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
