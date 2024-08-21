"use client";
import { SOCIAL_MEDIA } from "@/config";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/const";
const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/") {
    return null;
  }
  return (
    <div className="px-6 md:px-20 md:flex-row gap-6 flex flex-col items-center justify-between border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
      {/* <div className="mb-3 flex space-x-4">
        {SOCIAL_MEDIA.map((social) => {
          const IconComponent = social.svg;
          return (
            <Link
              className="text-default-600 hover:text-danger"
              key={social.id}
              href={social.href}
              title={social.description}
              target="_blank"
              rel="noopener noreferrer">
              <IconComponent style={{ width: 24, height: 24 }} />
            </Link>
          );
        })}
      </div> */}
      <div>
        <ul className="flex gap-x-6">
          {menuItems.map((item, index) => (
            <li key={`${item}-${index}`}>
              <Link
                href={item.href}
                className={`block text-sm hover:text-danger ${
                  item.href === pathName
                    ? "text-danger font-semibold"
                    : "text-default-800"
                }`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-2 flex space-x-2 text-sm  text-default-600">
        <span>© MiaMia</span>
        <span>{new Date().getFullYear()}</span>
        <span>. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
