"use client";
import CloseIcon from "@/lib/icons/Close";
import MubaraqLogo from "@/lib/icons/Logo";
import MenuIcon from "@/lib/icons/Menu";
import Link from "next/link";
import { FC, useState } from "react";
import { navItems } from ".";

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`w-full left-0 top-0 fixed bg-bg z-50 ${isOpen ? 'shadow-lg rounded-lg' : ''}`}>
      <div className="custom-container bg-bg">
        <div className="flex justify-between items-center w-full">
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
        {isOpen && (
          <div className="mx-auto w-full my-6 text-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-grey px-4 py-6 font-medium text-sm leading-6 hover:text-blue hover:border-b-2 hover:border-blue hover:rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default MobileNav;
