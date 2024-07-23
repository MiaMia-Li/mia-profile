"use client";

import Image from "next/image";
import { EXPERIENCES } from "@/config";

const TimelineItem = ({
  company,
  location,
  role,
  period,
  description,
  icon,
}: any) => (
  <div className="flex flex-col md:flex-row items-start mb-8 last:mb-0 gap-5">
    {/* <div className="relative w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
      <span className="text-xs md:text-lg font-semibold">{company[0]}</span>
    </div> */}
    <Image src={icon} alt={company} width={48} height={48} className="z-20" />
    <div>
      <h3 className="text-lg md:text-xl font-bold mb-1">
        {role} @ {company}
      </h3>
      <p className="text-xs md:text-sm text-gray-500 mb-1">{location}</p>
      <p className="text-xs md:text-sm text-gray-700 mb-2">{period}</p>
      <p className="text-xs md:text-sm text-gray-700">{description}</p>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="p-6 md:p-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Experiences</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 md:border-l-2 md:border-gray-300"></div>
        {EXPERIENCES.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
