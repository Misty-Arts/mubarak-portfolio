import { FC } from "react";

interface ISmallCard {
  date: string;
  time: string;
  topic: string;
  keywords: string[];
  color: string;
  showColor: boolean;
  handleCardClick: (index: string) => () => void;
}

const SmallCard: FC<ISmallCard> = ({ date, time, topic, keywords, color, showColor, handleCardClick }) => {
  return (
    <div onClick={handleCardClick(topic)} className={`px-2 max-w-350px py-4 ${showColor ? color : ""}`}>
      <span className="text-grey text-sm flex">
        <p>{date}&nbsp;&nbsp;</p> | <p>&nbsp;&nbsp;{time}</p>
      </span>
      <p className="font-bold text-sm my-2">{topic}</p>
      <div className="flex flex-wrap gap-1">
        {keywords.slice(0, 5).map((keyword, index) => (
          <p
            key={`${keyword}-${index}`}
            className="px-2 py-1 text-grey bg-faint-grey rounded-lg "
          >
            {keyword}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SmallCard;
