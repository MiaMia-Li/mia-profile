"use client";
import { SOCIAL_MEDIA } from "@/config";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/") {
    return null;
  }
  return (
    <div className="flex flex-col items-center my-6">
      <div className="mb-3 flex space-x-4">
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
      </div>
      <div className="mb-2 flex space-x-2 text-sm  text-default-500">
        <div>MiaMia</div>
        <div> • </div>
        <div>{new Date().getFullYear()}</div>
        <div> • </div>
        <div>Mia Blog</div>
      </div>
    </div>
  );
};

export default Footer;
