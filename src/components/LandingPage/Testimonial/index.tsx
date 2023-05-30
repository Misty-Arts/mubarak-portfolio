import Heading from "@/components/common/Heading";
import { TESTIMONIAL_1 } from "@/lib/images/landing-page";
import { FC } from "react";
import TestimonialCard from "./Card";

const testimonialCardArray = [
  {
    imageSrc: TESTIMONIAL_1.src,
    name: "Victor Vines Nwaogwugwu",
    position:
      "AVIMETA Solutions, Business Development Executive || Social Media Strategist",
    testimony:
      "I collaborated with Mubaraq for months on a project and it was a great honor to learn and work alongside him.He is one of the best in his field and is always willing to share best practices.His industry knowledge helped us top and rank first in various competitive tasks. His inputs helped us maximize productivity and boost team morale. He is responsible, diligent and also very skilled at design systems, ux research & analysis and detail-oriented. To top it all, he is humble and a team player qualities that makes him stand out. I loved working on the same project (Scout Vendor) and I wish him the best in all his endeavors.",
  },
  {
    imageSrc: TESTIMONIAL_1.src,
    name: "Victor Vines Nwaogwugwu",
    position:
      "AVIMETA Solutions, Business Development Executive || Social Media Strategist",
    testimony:
      "I collaborated with Mubaraq for months on a project and it was a great honor to learn and work alongside him.He is one of the best in his field and is always willing to share best practices.His industry knowledge helped us top and rank first in various competitive tasks. His inputs helped us maximize productivity and boost team morale. He is responsible, diligent and also very skilled at design systems, ux research & analysis and detail-oriented. To top it all, he is humble and a team player qualities that makes him stand out. I loved working on the same project (Scout Vendor) and I wish him the best in all his endeavors.",
  },
  {
    imageSrc: TESTIMONIAL_1.src,
    name: "Victor Vines Nwaogwugwu",
    position:
      "AVIMETA Solutions, Business Development Executive || Social Media Strategist",
    testimony:
      "I collaborated with Mubaraq for months on a project and it was a great honor to learn and work alongside him.He is one of the best in his field and is always willing to share best practices.His industry knowledge helped us top and rank first in various competitive tasks. His inputs helped us maximize productivity and boost team morale. He is responsible, diligent and also very skilled at design systems, ux research & analysis and detail-oriented. To top it all, he is humble and a team player qualities that makes him stand out. I loved working on the same project (Scout Vendor) and I wish him the best in all his endeavors.",
  },
];

const Testimonial: FC = () => {
  return (
    <section id="testimonial">
      <div className="custom-container mx-auto text-center">
        <Heading title="TESTIMONIAL" subtitle="Kind Words" />
        {testimonialCardArray.map((item, index) => (
          <TestimonialCard
            key={index}
            imageSrc={item.imageSrc}
            name={item.name}
            position={item.position}
            testimony={item.testimony}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
