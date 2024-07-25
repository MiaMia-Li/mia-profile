"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SOCIAL_MEDIA } from "@/config";

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

const MotionPro: React.FC = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 1000); // 上方内容动画的持续时间 + 一点延迟
  }, []);

  return (
    <motion.div
      className="flex flex-col justify-center items-center"
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

      <motion.p variants={itemVariants} className="text-center my-6 md:text-lg">
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
  );
};

export default MotionPro;
