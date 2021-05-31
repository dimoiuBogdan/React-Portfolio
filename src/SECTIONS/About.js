const About = ({ links }) => {
  return (
    <div id="about-section">
      <div className="container min-h-50vh h-full w-full lg:py-32 py-14 mx-auto md:px-0 px-4 flex items-center justify-evenly">
        <div
          id="about-image"
          data-aos="fade-up-right"
          className="hidden text-center h-96 w-full lg:w-1/2 md:w-1/3 max-w-sm border-2 md:flex border-yellow-400 text-yellow-400 rounded-xl shadow-lg hover:shadow-xl justify-evenly items-end lg:p-4 pb-4"
        >
          {links.map((link, i) => (
            <a
              key={link.href}
              className="hover:text-yellow-500 transition-all transform hover:scale-110"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <i className={`${link.iconClass} text-3xl`}></i>
            </a>
          ))}
        </div>
        <div
          data-aos="fade-down-left"
          className="text-justify text-gray-300 lg:w-1/2 md:w-2/3 w-full text-lg sm:px-6"
        >
          <h2 className="title">About Me</h2>
          <div className="flex items-center justify-between md:hidden">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                <i
                  className={`${link.iconClass} text-yellow-400 mt-3 text-2xl`}
                ></i>
              </a>
            ))}
          </div>
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
            <a href="#skills-section">
              <button className="button w-32">Skills</button>
            </a>
            <a href="#portfolio-section">
              <button className="button w-32">Portfolio</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
