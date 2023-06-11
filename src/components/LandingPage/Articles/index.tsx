import Heading from "@/components/common/Heading";
import { FC } from "react";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";

const smallCardItems = [
  {
    date: "Mar 25, 2023",
    time: "8 min read",
    topic: "Tech Careers Unmasked: The Good, The Bad, and the Ugly Truth",
    keywords: ["Tech Career", "Resilience", "Mindset"],
  },
  {
    date: "Apr 16, 2022",
    time: "6 min read",
    topic: "Dichotomy of talking to users: Fundamental of User Research",
    keywords: ["UX Research", "Behavioural Design"],
  },
  {
    date: "Nov 27, 2021",
    time: "4 min read",
    topic:
      "Tech Careers Unmasked: The Good, The Bad, and the Ugly TruthUX FOR EDUCATIONAL WEBSITE",
    keywords: ["Mentorship", "Product Design", "Internship"],
  },
  {
    date: "Prospective",
    time: "1 min read",
    topic: "Article coming Soon!",
    keywords: ["Tech Career", "UX Research", "Interaction"],
  },
];

const Articles: FC = () => {
  return (
    <section className=" custom-container my-16 md:my-32">
      <Heading subtitle="Thought Provoking" title="ARTICLES" />
      <div className="flex justify-between">
        <LargeCard />

        <div className="border-grey border-l-2 max-w-350px w-full px-2">
          <p className="font-medium text-sm text-grey">
            Articles by Mubaraq Somuyiwa
          </p>
          {smallCardItems.map((item, index) => (
            <SmallCard
              key={`${item}-${index}`}
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
