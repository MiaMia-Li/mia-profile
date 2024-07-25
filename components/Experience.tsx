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
      <p className="text-xs md:text-sm text-default-600 mb-1">{location}</p>
      <p className="text-xs md:text-sm text-default-600 mb-2">{period}</p>
      <p className="text-xs md:text-sm text-default-800">{description}</p>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold mb-6">Experiences</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0"></div>
        {EXPERIENCES.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
