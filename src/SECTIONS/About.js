const About = () => {
  return (
    <div id="about-section">
      <div className="container min-h-50vh w-full py-20 mx-auto flex items-center justify-evenly">
        <div
          id="about-image"
          data-aos="fade-in"
          className="hidden text-center h-96 w-full max-w-sm border-2 lg:flex border-yellow-400 text-yellow-400 rounded-xl shadow-lg hover:shadow-xl justify-evenly items-end p-4"
        >
          <a
            className="hover:text-yellow-500 transition-all transform hover:scale-110"
            href="https://github.com/dimoiuBogdan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="top-center"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a
            className="hover:text-yellow-500 transition-all transform hover:scale-110"
            href="https://www.instagram.com/bogdan_dimoiu/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor="top-center"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a
            className="hover:text-yellow-500 transition-all transform hover:scale-110"
            href="tel:+40727892022"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-anchor="top-center"
          >
            <i className="fas fa-phone text-3xl"></i>
          </a>
          <a
            className="hover:text-yellow-500 transition-all transform hover:scale-110"
            href="mailto:bogdybogdan34@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-anchor="top-center"
          >
            <i className="fas fa-envelope text-3xl"></i>
          </a>
        </div>
        <div
          data-aos="fade-down-left"
          className="text-justify text-gray-300 lg:w-1/2 w-full text-lg px-6"
        >
          <h2 className="title">About Me</h2>
          <p className="my-6">
            Hello! My name is Dimoiu Bogdan and I live in Romania, Sibiu. I
            consider myself a positive, happy person that you can easily talk
            to. Working in a team was always something I liked since everything
            is easier and more exciting with the right people around.
          </p>
          <p>
            I began learning programming in the summer of 2020 when I was in
            lockdown due to COVID-19. I chose Javascript because it looked like
            an easy, rich, popular and enjoyable programming language and did
            not regret it ever since.
          </p>
          <div className="flex items-center justify-start">
            <button className="button w-32">Skills</button>
            <button className="button w-32">Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
