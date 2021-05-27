import { useEffect } from "react";
import HomeScroll from "../COMPONENTS/HomeScroll";
import heroPNG from "../IMAGES/hero_png.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <div id="home-section">
      <div className="container lg:px-3vw text-center mx-auto w-full min-h-screen flex items-center justify-evenly text-white font-medium">
        <div className="w-full" data-aos="fade-right" data-aos-delay="300">
          <h3 className="text-2xl lg:text-3xl">Hello, I'm Bogdan,</h3>
          <h2 className="sm:text-4xl lg:text-5xl text-4xl my-3 text-yellow-400">
            FRONT-END DEV.
          </h2>
          <h4 className="sm:text-xl lg:text-2xl text-lg">
            Work Hard, Keep Learning, Deliver Quality
          </h4>
          <div>
            <button className="button">Download CV</button>
            <button className="button">My Skills</button>
          </div>
        </div>
        <img
          className="md:w-1/2 sm:w-2/5 w-0"
          src={heroPNG}
          alt="hero-png"
          data-aos="fade-left"
          data-aos-delay="300"
        />
      </div>
      <HomeScroll />
    </div>
  );
};

export default Home;
