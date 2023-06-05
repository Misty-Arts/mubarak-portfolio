import BehanceIcon from "@/lib/icons/About/Behance";
import GithubIcon from "@/lib/icons/About/Github";
import InstagramIcon from "@/lib/icons/About/Instagram";
import LinkedinIcon from "@/lib/icons/About/Linkedin";
import Copyright from "@/lib/icons/Footer/Copyright";
import Dribble from "@/lib/icons/Footer/Dribble";
import FacebookIcon from "@/lib/icons/Footer/Facebook";
import MediumIcon from "@/lib/icons/Footer/Medium";
import TwitterIcon from "@/lib/icons/Footer/Twitter";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="custom-container flex flex-wrap justify-between items-center py-7">
        <span className="flex items-center mb-4 md:mb-0">
          <Copyright />
          <p className="font-medium text-sm ml-1 text-grey">
            2023 Mustafa Oladepo, All Rights Reserved
          </p>
        </span>
        <div className="flex justify-between items-center w-full max-w-418px mb-4 md:mb-0">
          <Link href="/linkedin">
            <LinkedinIcon />
          </Link>
          <Link href="/github">
            <GithubIcon />
          </Link>
          <Link href="/dribble">
            <Dribble />
          </Link>
          <Link href="/behance">
            <BehanceIcon />
          </Link>
          <Link href="/medium">
            <MediumIcon />
          </Link>
          <Link href="/twitter">
            <TwitterIcon />
          </Link>
          <Link href="/instagram">
            <InstagramIcon />
          </Link>
          <Link href="/facebook">
            <FacebookIcon />
          </Link>
        </div>
        <div className="text-grey font-semibold">
          Developed by&nbsp;
          <Link className="text-blue hover:underline" href="/misty">
            Misty &nbsp;
          </Link>
          | Designed by&nbsp;
          <Link className="text-blue hover:underline" href="/fortress">
            Fortress
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
