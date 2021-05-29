import React from "react";

const HomeScroll = () => {
  return (
    <a
      href="#about-section"
      className="absolute bottom-10 h-12 w-6 rounded-full border-2 left-1/2 transform -translate-x-1/2 border-yellow-400"
    >
      <div
        id="scroll-bottom"
        className="h-2 w-1 mx-auto mt-2 transform bg-yellow-400 rounded-full"
      ></div>
    </a>
  );
};

export default HomeScroll;
