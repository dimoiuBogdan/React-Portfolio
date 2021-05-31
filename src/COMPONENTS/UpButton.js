import { useEffect, useState } from "react";

const UpButton = () => {
  const [buttonBackground, setButtonBackground] = useState(0);

  const scrollFunction = () => {
    setButtonBackground(window.scrollY / 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  return (
    <a
      href="#home-section"
      className="cursor-pointer transition-all hover:bg-transparent  bg-yellow-400 hover:text-yellow-400 fixed md:bottom-10 bottom-5 md:right-10 right-5 md:h-10 h-7 md:w-10 w-7 rounded-full shadow-md flex items-center justify-center text-gray-700 text-2xl md:text-3xl"
      style={{
        opacity: `${buttonBackground}`,
      }}
    >
      <i className="fas fa-chevron-up"></i>
    </a>
  );
};

export default UpButton;
