"use client";
import CloseIcon from "@/lib/icons/Close";
import MubaraqLogo from "@/lib/icons/Logo";
import MenuIcon from "@/lib/icons/Menu";
import { FC, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="custom-container relative">
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <MubaraqLogo />
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </button>
          )}
        </div>
        {isOpen && <MobileNav />}
      </div>
      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </nav>
  );
};

export default Navbar;
