import BehanceIcon from "@/lib/icons/About/Behance";
import GithubIcon from "@/lib/icons/About/Github";
import InstagramIcon from "@/lib/icons/About/Instagram";
import LinkedinIcon from "@/lib/icons/About/Linkedin";
import { ABOUT_IMAGE } from "@/lib/images/landing-page";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const socialIcons = [
  { icon: <LinkedinIcon />, href: "/linkedin" },
  { icon: <BehanceIcon />, href: "/behance" },
  { icon: <GithubIcon />, href: "/github" },
  { icon: <InstagramIcon />, href: "/instagram" },
];

const AboutContent: FC = () => {
  return (
    <div className="md:flex items-start gap-12 mt-12 md:px-16">
      <div className="w-full md:w-37.75%">
        <div className="relative w-full max-w-450px mb-4 md:mb-8">
          <Image
            {...ABOUT_IMAGE}
            alt="Image of Mubaraq Somuyiwa"
          />
        </div>
        <div className="flex justify-center gap-8 max-w-412px items-center mb-8 md:mb-0">
          {socialIcons.map((item) => (
            <button key={item.href} className="btn">
              <Link href={item.href}> {item.icon}</Link>
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-680px">
        <div className="font-normal text-base leading-28px text-justify text-grey mb-6 md:mb-12">
          <p className="mb-3">
            Hi, I'm Mubaraq Somuyiwa, but my friends call me Fortress. As a
            product designer, UX researcher, and UX writer with years of
            hands-on experience, I've had the privilege of working on diverse
            projects with cross-cultural, remote teams. I've played both
            leadership and team member roles, bringing my expertise to the table
            in user research, interaction design, responsive design, and rapid
            prototyping.
          </p>
          <p className="mb-3">
            But, I don't just have technical skills. I have a knack for solving
            complex problems for top companies, and I possess critical thinking,
            foresight, leadership, and organizational abilities that enable me
            to manage teams and projects effectively. While I prioritize meeting
            clients' business goals, I also strive to create a positive impact
            on users by focusing on behavior-first designs and psychology-driven
            designs, aligning experiences with users' behaviors and cognitive
            processes.
          </p>
          <p className="mb-3">
            When I'm not designing, I am passionate about giving back to the
            community through mentorship, volunteering and being relevant. In my
            free time, I enjoy playing video games, watching movies, and keeping
            fit through exercise and swimming.
          </p>
        </div>
        <div className="flex justify-start">
          <button className="btn btn-blue mr-16">Download Resume</button>
          <button className="btn btn-blue"> Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
