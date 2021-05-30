// Hooks imports.
import useClickOutside from "../CUSTOM HOOKS/useClickOutside";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { ref, isVisible, setIsVisible } = useClickOutside(false);
  const [navBackground, setNavBackground] = useState(0);
  const sections = [
    {
      content: "Home",
      href: "#home-section",
    },
    {
      content: "About",
      href: "#about-section",
    },
    {
      content: "Skills",
      href: "#skills-section",
    },
    {
      content: "Portfolio",
      href: "#portfolio-section",
    },
    {
      content: "Contact",
      href: "#contact-section",
    },
  ];

  // Set nav background opacity as you scroll
  const scrollFunction = () => {
    setNavBackground(window.scrollY / 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="z-10 py-3  fixed left-0 right-0 px-4 text-white
        bg-gray-600 border-b-4 border-yellow-400"
      style={{
        backgroundColor: `rgba(40, 40, 40, ${navBackground})`,
        borderBottom: `2px solid rgba(251, 191, 36, ${navBackground})`,
      }}
    >
      <div className="container mx-auto items-center justify-between font-medium flex">
        <img src="" alt="" />
        <div>
          <div
            id="hamburger"
            className="w-10 cursor-pointer lg:hidden"
            onClick={() => setIsVisible((prevValue) => !prevValue)}
          >
            <div className="h-1 w-full transition duration-1000 rounded-full bg-yellow-400 my-1"></div>
            <div
              className={`h-1 transition-all delay-100 duration-700 w-4/5 ml-auto rounded-full bg-yellow-400 my-1 ${
                isVisible ? "w-full" : ""
              }`}
            ></div>
            <div
              className={`h-1 transition-all delay-300 duration-700 w-1/2 ml-auto rounded-full bg-yellow-400 my-1 ${
                isVisible ? "w-full" : ""
              }`}
            ></div>
          </div>
          <div
            className={`lg:border-0 lg:flex-row lg:bg-opacity-0 lg:relative lg:w-auto
          flex-col flex transition-all duration-1000 fixed top-0 h-full w-1/3 min-w-30rem border-r-2 border-yellow-400 left-0 bg-black bg-opacity-70 justify-evenly text-lg items-center
          ${isVisible ? "left-0" : "-left-96 lg:left-0"}`}
          >
            {sections.map((section, index) => (
              <a
                key={section.content}
                href={section.href}
                className="mx-3 flex items-center cursor-pointer transition-all hover:text-yellow-400 transform hover:scale-105"
              >
                <span className="mr-1 text-yellow-400">0{index + 1}.</span>
                {section.content}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
