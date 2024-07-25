"use client";

// import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Experience from "../../components/Experience";
import { Image } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="about-me flex flex-col md:flex-row gap-5 ">
        <div className="flex-1">
          <p className="font-bold text-xl md:text-3xl mb-5">About Me</p>
          <p className="mb-4 md:text-lg">
            Self-motivated and cheerful Front-End Developer with 5 years of
            experience enhancing user experiences and optimizing web
            performance.
          </p>
          <p className="mb-4 md:text-lg">
            Currently residing in Singapore, developing independently, and
            actively seeking job opportunities after resigning from a position
            in China.
          </p>
          <p className="md:text-lg"> 👉My good friend, a cat named Oreo.</p>
        </div>

        <div>
          <Image
            isZoomed
            shadow="md"
            src="/oreo.jpg"
            alt="Oreo"
            width={300}
            height={300}
            // className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Experience />
    </div>
  );
}
