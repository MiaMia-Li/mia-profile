"use client";
import { Image } from "@nextui-org/react";
import { PROJECT_LIST } from "@/lib/const";
import Link from "next/link";
// import Image from "next/image";
import { RiExternalLinkFill } from "react-icons/ri";

const BlogList: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2">
      {PROJECT_LIST.map((item) => {
        const { name, desc, img, ico, href } = item;
        return (
          <div
            key={name}
            className="p-6 transition sm:rounded-2xl min-h-40 flex flex-col dark:hover:bg-zinc-800/50 hover:bg-zinc-100/50">
            {/* <Image src={img} alt={name} /> */}
            <p className="flex items-center text-lg font-semibold gap-2 mb-4 text-default-800">
              <Image src={ico} alt={name} width={24} height={24} />
              <span>{name}</span>
            </p>
            <p className="text-medium text-default-600 flex-1">{desc}</p>
            <Link
              href={href}
              className="text-danger text-sm font-semibold flex gap-1 items-center mt-6">
              Visit website
              <RiExternalLinkFill />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
