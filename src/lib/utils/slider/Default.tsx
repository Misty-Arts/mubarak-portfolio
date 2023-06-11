import { useKeenSlider } from "keen-slider/react";
import { FC, ReactNode, useState } from "react";
import { AutoplayPlugin } from "./AutoplayPlugin";

interface ISliderDotsAndArrows {
  sliders: ReactNode[];
  slidesPerView?: number | "auto";
  autoplay?: boolean;
}

const SliderDotsAndArrows: FC<ISliderDotsAndArrows> = ({
  sliders,
  slidesPerView = "auto",
  autoplay = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      loop: true,
      slides: { perView: slidesPerView },
    },
    autoplay ? [AutoplayPlugin(5000)] : undefined
  );

  return (
    <>
      <div className="relative">
        <div className="keen-slider" ref={sliderRef}>
          {sliders.map((slide, index) => (
            <div
              key={`related-${index}`}
              className="keen-slider__slide max-w-sm min-w-full"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="flex w-full p-2 justify-center mt-4">
          {[
            ...Array(
              instanceRef?.current?.track?.details?.slides?.length
            ).keys(),
          ].map((idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`cursor-pointer z-40 hover:bg-blue h-7px mr-2 ${
                  currentSlide === idx
                    ? `w-15px rounded-xl bg-blue`
                    : `w-7px rounded-full bg-faint-grey`
                }`}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default SliderDotsAndArrows;
