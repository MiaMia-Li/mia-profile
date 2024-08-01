"use client";
import { useEffect, useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

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
          className="p-2 bg-danger-400 text-white rounded-full shadow-lg hover:opacity-80 transition duration-300">
          <RiArrowDropUpLine style={{ width: 32, height: 32 }} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
