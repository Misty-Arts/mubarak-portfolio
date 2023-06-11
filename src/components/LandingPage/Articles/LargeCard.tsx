import Link from "next/link";
import { FC } from "react";

interface ILargeCard {
  topic: string;
  content: string;
  index: number;
  color: string;
  handleCardClick: (index: string) => () => void;
}

const getZIndex = (index: number) => {
  switch (index) {
    case 0:
      return "z-30";
    case 1:
      return "z-20";
    case 2:
      return "z-10";
    default:
      return "z-0";
  }
};

const getPositionAndScale = (index: number) => {
  switch (index) {
    case 0:
      return "top-0 scale-100 hover:scale-105";
    case 1:
      return " -top-12 scale-95 hover:scale-100";
    case 2:
      return "-top-24 scale-90 hover:scale-95";
    default:
      return "-top-36 scale-85 hover:scale-90";
  }
};

const LargeCard: FC<ILargeCard> = ({
  topic,
  content,
  index,
  color,
  handleCardClick,
}) => {
  const htmlContent = (
    <>
      <p className="font-bold text-xl leading-24px mb-3">{topic}</p>
      <p className="font-semibold text-xl text-grey">
        {content.slice(0, 300)}&nbsp;...
      </p>
    </>
  );

  return (
    <div
      onClick={handleCardClick(topic)}
      className={`p-2 max-w-528px text-ellipsis overflow-hidden transition-all duration-300 w-screen md:p-3 origin-center ${color} ${getZIndex(
        index
      )} ${getPositionAndScale(index)} rounded-xl absolute`}
    >
      {index === 0 ? (
        <Link href="/">{htmlContent}</Link>
      ) : (
        <div className="cursor-pointer">{htmlContent}</div>
      )}
    </div>
  );
};

export default LargeCard;
