import HomeScroll from "../COMPONENTS/HomeScroll";
import heroPNG from "../IMAGES/hero_png.png";

const Home = () => {
  return (
    <div id="home-section">
      <div className="container lg:px-3vw text-center mx-auto w-full min-h-screen flex items-center justify-evenly text-white font-medium">
        <div className="w-full">
          <h3 className="text-2xl lg:text-3xl" data-aos="fade-right">
            Hello, I'm Bogdan,
          </h3>
          <h2
            className="sm:text-4xl lg:text-5xl text-4xl my-3 text-yellow-400"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            FRONT-END DEV.
          </h2>
          <h4
            className="sm:text-xl lg:text-2xl text-lg"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Passionate, Hard Working, Always Learning
          </h4>
          <div data-aos="fade-right" data-aos-delay="1000">
            <button className="button">Download CV</button>
            <button className="button">My Skills</button>
          </div>
        </div>
        <img
          className="md:w-1/2 sm:w-2/5 w-0"
          data-aos="fade-in"
          data-aos-delay="1300"
          src={heroPNG}
          alt="hero-png"
        />
      </div>
      <HomeScroll />
    </div>
  );
};

export default Home;
