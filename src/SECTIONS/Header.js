// Hooks imports.
import useClickOutside from "../CUSTOM HOOKS/useClickOutside";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { ref, isVisible, setIsVisible } = useClickOutside(false);
  const [navBackground, setNavBackground] = useState(0);

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
        backgroundColor: `rgba(75, 85, 99, ${navBackground})`,
        borderBottom: `2px solid rgba(96, 165, 250, ${navBackground})`,
      }}
    >
      <div className="container mx-auto items-center justify-between flex">
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
          flex-col flex transition-all duration-1000 fixed top-0 h-full w-1/3 min-w-30rem border-r-2 border-yellow-400 left-0 bg-black bg-opacity-70 justify-evenly text-xl items-center
          ${isVisible ? "left-0" : "-left-96 lg:left-0"}`}
          >
            <h2 className="mx-4 flex items-center cursor-pointer transition-all hover:text-yellow-400 transform hover:scale-105">
              Home
            </h2>
            <h2 className="mx-4 flex items-center cursor-pointer transition-all hover:text-yellow-400 transform hover:scale-105">
              About
            </h2>
            <h2 className="mx-4 flex items-center cursor-pointer transition-all hover:text-yellow-400 transform hover:scale-105">
              Skills
            </h2>
            <h2 className="mx-4 flex items-center cursor-pointer transition-all hover:text-yellow-400 transform hover:scale-105">
              Portfolio
            </h2>
            <h2 className="mx-4 flex items-center cursor-pointer transition-all hover:text-yellow-400 transform hover:scale-105">
              Contact
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
