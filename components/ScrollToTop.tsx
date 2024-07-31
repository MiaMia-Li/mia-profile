"use client";
import { useEffect, useState } from "react";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { RiArrowUpFill } from "react-icons/ri";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:opacity-80 transition duration-300">
          <RiArrowUpFill style={{ width: 32, height: 32 }} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
