"use client";
import { useEffect, useState } from "react";
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
          className="p-2 bg-danger-400 text-white rounded-full shadow-lg hover:bg-danger-500 transition duration-300">
          <RiArrowUpFill style={{ width: 24, height: 24 }} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
