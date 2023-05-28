import Link from "next/link";
import { FC } from "react";
import { navItems } from ".";

const MobileNav: FC = () => {
  return (
    <div className="custom-container">
      <div className="mx-auto w-fit fixed top-0 right-0 text-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-grey px-4 py-2 font-medium text-sm leading-6 hover:text-blue hover:border-b-2 hover:border-blue hover:rounded-lg"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
