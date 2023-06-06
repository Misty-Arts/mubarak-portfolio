"use client";
import Heading from "@/components/common/Heading";
import SliderDotsAndArrows from "@/lib/utils/slider/Default";
import { FC, useMemo } from "react";
import TestimonialCard from "./Card";
import { testimonialCardContent } from "./Contents";

const Testimonial: FC = () => {
  const testimonialSlides = useMemo(
    () =>
      testimonialCardContent.map(
        ({ imageSrc, name, position, testimony }, index) => (
          <TestimonialCard
            key={index}
            imageSrc={imageSrc}
            name={name}
            position={position}
            testimony={testimony}
          />
        )
      ),
    []
  );
  return (
    <section id="testimonial">
      <div className="custom-container mx-auto text-center">
        <Heading title="TESTIMONIAL" subtitle="Kind Words" />

        <SliderDotsAndArrows
          sliders={testimonialSlides}
          slidesPerView={1}
          autoplay
        />
      </div>
    </section>
  );
};

export default Testimonial;
