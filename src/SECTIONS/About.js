const About = () => {
  const links = [
    {
      href: "https://github.com/dimoiuBogdan?tab=repositories",
      aosDelay: 200,
      iconClass: "fab fa-github",
    },
    {
      href: "https://www.instagram.com/bogdan_dimoiu/",
      aosDelay: 300,
      iconClass: "fab fa-instagram",
    },
    {
      href: "tel:+40727892022",
      aosDelay: 400,
      iconClass: "fas fa-phone",
    },
    {
      href: "mailto:bogdybogdan34@gmail.com",
      aosDelay: 500,
      iconClass: "fas fa-envelope",
    },
  ];

  return (
    <div id="about-section">
      <div className="container min-h-50vh w-full lg:py-20 py-14 mx-auto flex items-center justify-evenly">
        <div
          id="about-image"
          data-aos="fade-in"
          className="hidden text-center h-96 w-full max-w-sm border-2 lg:flex border-yellow-400 text-yellow-400 rounded-xl shadow-lg hover:shadow-xl justify-evenly items-end p-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              className="hover:text-yellow-500 transition-all transform hover:scale-110"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={link.aosDelay}
            >
              <i className={`${link.iconClass} text-3xl`}></i>
            </a>
          ))}
        </div>
        <div
          data-aos="fade-down-left"
          className="text-justify text-gray-300 lg:w-1/2 w-full text-lg sm:px-6"
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
