"use client";
import { SOCIAL_MEDIA } from "@/config";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { NAV_LIST } from "@/lib/const";
const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/") {
    return null;
  }
  return (
    <div className="px-6 py-6 md:px-20 md:py-12 md:flex-row gap-6 flex flex-col items-center justify-between border-t border-zinc-100 dark:border-zinc-700/40">
      <div>
        <ul className="flex gap-x-6">
          {NAV_LIST.map((item, index) => (
            <li key={`${item}-${index}`}>
              <Link
                href={item.href}
                className={`block font-semibold text-sm hover:text-danger ${
                  item.href === pathName ? "text-danger" : "text-default-800"
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
