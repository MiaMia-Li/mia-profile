"use client";

// import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Experience from "../../components/Experience";
import { Image } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <h2 className="font-bold text-xl md:text-2xl mb-6">About Me</h2>
      <div className="about-me mb-10 flex flex-col md:flex-row md:gap-12 md:items-center ">
        <Image
          isZoomed
          shadow="md"
          radius="full"
          src="/oreo.jpg"
          alt="Oreo"
          width={200}
          height={200}
        />
        <div className="flex-1">
          <p className="mb-4 md:text-medium">
            I am a seasoned Software Engineer with over five years of experience
            at big internet companies. My expertise lies in full-stack
            development with a strong focus on front-end technologies such as
            React, Vue, and TypeScript.
          </p>
          <p className="mb-4 md:text-medium">
            Currently residing in Singapore, developing independently, and
            actively seeking job opportunities after resigning from a position
            in China.
          </p>
          <p className="md:text-medium"> 👉My good friend, a cat named Oreo.</p>
        </div>
      </div>
      <Experience />
    </div>
  );
}
