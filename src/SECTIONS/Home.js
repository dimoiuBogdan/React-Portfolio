import HomeScroll from "../COMPONENTS/HomeScroll";
import LinksBar from "../COMPONENTS/LinksBar";
import heroPNG from "../IMAGES/hero_png.png";

import CV from "../IMAGES/CV.pdf";

const Home = ({ links }) => {
  return (
    <div id="home-section">
      <div
        data-aos="fade-in"
        className="container text-center sm:text-left lg:px-3vw mx-auto min-h-screen flex items-center justify-evenly text-white font-medium"
      >
        <div className="w-full" data-aos="fade-right" data-aos-delay="300">
          <h3 className="text-2xl lg:text-3xl">Hello, I'm Bogdan,</h3>
          <h2 className="sm:text-4xl lg:text-5xl text-4xl my-5 text-yellow-400">
            JUNIOR FRONT-END DEV.
          </h2>
          <h4 className="sm:text-xl lg:text-2xl text-lg">
            Work Hard, Keep Learning, Deliver Quality
          </h4>
          <div>
            <a href={CV} download className="button">
              Download CV
            </a>
            <button className="button">
              <a href="#skills-section">My Skills</a>
            </button>
          </div>
        </div>
        <img
          load="lazy"
          className="md:w-1/2 sm:w-2/5 w-0"
          src={heroPNG}
          alt="hero-png"
          data-aos="fade-left"
          data-aos-delay="300"
        />
      </div>
      <HomeScroll />
      <LinksBar links={links} />
    </div>
  );
};

export default Home;
