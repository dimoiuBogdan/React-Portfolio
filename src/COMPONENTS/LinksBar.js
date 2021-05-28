const LinksBar = () => {
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
    <div className="relative">
      <div id="social-line" className="absolute bottom-0 left-12 flex flex-col">
        {links.map((link) => (
          <a
            href={link.href}
            data-aos-delay={link.aosDelay}
            data-aos-anchor-placement="top center"
            data-aos="fade-left"
          >
            <i
              className={`${link.iconClass} text-2xl text-black text-opacity-80 font-bold mb-8 z-20 bg-yellow-400 px-2 py-1 hover:text-yellow-600 rounded-full transform hover:scale-125 transition-all`}
            ></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksBar;
