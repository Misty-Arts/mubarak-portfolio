import { FC } from "react";

interface ILargeCard {
  topic: string;
  content: string;
}

const LargeCard: FC<ILargeCard> = ({ topic, content }) => {
  return (
    <div className="p-2 md:p-3 bg-amber-100 rounded-xl">
      <p className="font-bold text-xl leading-24px mb-3">{topic}</p>
      <p className="font-semibold text-xl text-grey">{content}</p>
    </div>
  );
};

export default LargeCard;
