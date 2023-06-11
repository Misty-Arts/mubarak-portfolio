"use client"
import MubaraqLogo from "@/lib/icons/Logo";
import { FC } from "react";
import { Link } from 'react-scroll';
import { navItems } from ".";

const DesktopNav: FC = () => {
  // const [selectedTab, setSelectedTab] = useState("Home");

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
              to={item.href}
              offset={-120}
              activeClass="text-blue border-b-2 border-blue rounded-lg"
              className={`text-grey px-4 py-2 cursor-pointer font-medium text-sm leading-6 hover:text-blue hover:border-b-2 hover:border-blue hover:rounded-lg`}
              spy={true} smooth={true}
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
