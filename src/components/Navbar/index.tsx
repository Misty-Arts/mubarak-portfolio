import { FC } from "react";
import DesktopNav from "./Desktop";
import MobileNav from "./Mobile";

export const navItems = [
  {
    name: "Home",
    href: "/#home",
  },
  {
    name: "Portfolio",
    href: "/#portfolio",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Articles",
    href: "/#articles",
  },
  {
    name: "Testimonial",
    href: "/#testimonial",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

const Navbar: FC = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </>
  );
};

export default Navbar;
