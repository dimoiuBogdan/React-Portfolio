const LinksBar = ({ inAbout }) => {
  const links = [
    {
      href: "https://github.com/dimoiuBogdan?tab=repositories",
      iconClass: "fab fa-github",
    },
    {
      href: "https://www.instagram.com/bogdan_dimoiu/",
      iconClass: "fab fa-instagram",
    },
    {
      href: "tel:+40727892022",
      iconClass: "fas fa-phone",
    },
    {
      href: "mailto:bogdybogdan34@gmail.com",
      iconClass: "fas fa-envelope",
    },
    {
      href: "https://www.linkedin.com/in/dimoiu-bogdan-650b431ba/",
      iconClass: "fab fa-linkedin-in",
    },
  ];

  return (
    <div className="relative hidden xl:block">
      <div
        data-aos="fade-in"
        data-aos-delay="1000"
        id="social-line"
        className="absolute bottom-0 left-6 flex flex-col"
      >
        {links.map((link, i) => (
          <a
            key={link.iconClass}
            href={link.href}
            data-aos-delay={1200 + i * 100}
            data-aos-anchor-placement="top center"
            data-aos="fade-right"
          >
            <i
              className={`${link.iconClass} lg:text-2xl text-xl text-black text-opacity-80 font-bold mb-8 z-20 bg-yellow-400 px-2 py-1 hover:text-yellow-600 rounded-full transform hover:scale-125 transition-all`}
            ></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksBar;
