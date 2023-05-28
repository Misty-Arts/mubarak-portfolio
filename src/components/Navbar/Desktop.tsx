import MubaraqLogo from "@/lib/icons/Logo";
import Link from "next/link";
import { FC } from "react";
import { navItems } from ".";

const DesktopNav: FC = () => {
  return (
    <div className="flex justify-between fixed items-center h-30">
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
  );
};

export default DesktopNav;
