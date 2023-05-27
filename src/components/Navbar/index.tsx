import { FC } from "react";
import DesktopNav from "./Desktop";
import MobileNav from "./Mobile";

export const navItems = [
  {
    name: "Home",
    href: "/",
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
]

const Navbar: FC = () => {
  return (
    <nav>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </nav>
  );
};

export default Navbar;
