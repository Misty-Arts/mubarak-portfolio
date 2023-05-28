import MubaraqLogo from "@/lib/icons/Logo";
import Link from "next/link";
import { FC } from "react";
import { navItems } from ".";

const DesktopNav: FC = () => {
  return (
    <nav className="w-full left-0 top-0 fixed z-50 bg-bg">
      <div className="flex justify-between custom-container items-center h-30">
        <span>
          <MubaraqLogo />
        </span>
        <div className="max-w-655px w-full flex justify-between">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-grey px-4 py-2 font-medium text-sm leading-6 hover:text-blue hover:border-b-2 hover:border-blue hover:rounded-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
