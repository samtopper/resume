import React, { useState, useEffect } from "react";
import "./backToTopButton.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`back-to-top-btn ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        width="32"
        height="32"
        viewBox="0 0 20 20"
        aria-labelledby="icon-svg-title- icon-svg-desc-"
        role="img"
        class="sc-rbbb40-0 fgseiv"
      >
        <title>chevron-up</title>
        <path d="M15.54 13.44c-0.3 0.3-0.78 0.3-1.060 0l-4.48-4.46-4.46 4.46c-0.3 0.3-0.78 0.3-1.060 0s-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060z"></path>
      </svg>
    </button>
  );
};

export default BackToTopButton;
