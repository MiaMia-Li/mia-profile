"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 px-6 rounded-none shadow-lg mb-5 overflow-hidden">
      <motion.div
        className="whitespace-nowrap flex items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
        {[...Array(2)].map((_, index) => (
          <div key={index} className="inline-flex items-center space-x-8">
            <p className="text-xl font-semibold text-white">
              🌟 Edit, enhance, and perfect your images effortlessly. Try
              PhotoTailor today!
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
