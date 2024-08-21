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
    <Image src={icon} alt={company} width={48} height={48} />
    <div>
      <h3 className="text-xl font-bold mb-1">
        {role} @ {company}
      </h3>
      <p className="text-sm text-default-600 mb-1">{location}</p>
      <p className="text-sm text-default-600 mb-2">{period}</p>
      <p className="text-medium text-default-800">{description}</p>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl md:mb-12 font-bold mb-6">
        Experiences
      </h2>
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0"></div>
        {EXPERIENCES.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
