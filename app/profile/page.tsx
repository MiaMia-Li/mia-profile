"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SOCIAL_MEDIA } from "../../config";
import Experience from "../../components/Experience";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Page() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 1000); // 上方内容动画的持续时间 + 一点延迟

    const handleScroll = () => {
      setIsAboutMeVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* 动画部分内容（标题、头像、描述等） */}
      <motion.div
        className="flex flex-col justify-center items-center h-screen w-screen p-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.h1
          className="text-2xl font-bold mb-6 md:text-3xl"
          variants={itemVariants}>
          Hello, I&apos;m MengYao Li 👋
        </motion.h1>
        <motion.div variants={itemVariants}>
          <Image src="/profile.png" width={150} height={150} alt="Avatar" />
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-2xl mb-5 mt-8 font-bold md:text-4xl">
          👩‍💻 Developer
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-2xl font-bold md:text-4xl">
          📸 Photographer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-center my-6 md:text-lg">
          Welcome to my personal page!
          <br />
          Lively Front-End Developer, seeking new adventures!
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4"
          variants={iconContainerVariants}
          initial="hidden"
          animate={isContentVisible ? "visible" : "hidden"}>
          {SOCIAL_MEDIA.map((social) => (
            <motion.a
              variants={iconVariants}
              key={social.id}
              href={social.href}
              title={social.description}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={social.icon}
                alt={social.description}
                width={48}
                height={48}
                className="hover:opacity-60 transition-opacity duration-300"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* About Me 部分 */}
      <div
        className={`transition-opacity duration-500 ${
          isAboutMeVisible ? "opacity-100" : "opacity-0"
        }`}>
        <motion.div
          className="about-me flex flex-col pr-12 pl-12 md:flex-row gap-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
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

          <motion.div
            className="flex-1"
            whileTap={{
              scale: 1.05,
              rotate: [0, -5, 5, -5, 5, 0], // 抖动效果
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -5, 5, -5, 5, 0], // 抖动效果
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}>
            <Image
              src="/oreo.jpg"
              alt="Oreo"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
        <Experience />
      </div>
    </div>
  );
}
