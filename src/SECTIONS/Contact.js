const Contact = ({ links }) => {
  const sendEmail = () => {};

  return (
    <div className="pb-12 px-2" id="contact-section">
      <h2 className="title text-center mb-9">Let's Talk</h2>
      <div className="lg:w-2/3 w-full mx-auto flex flex-wrap lg:flex-nowrap">
        <div className="sm:w-3/4 w-full">
          <div className="flex items-center justify-evenly flex-wrap">
            <div className="sm:w-1/2 w-full sm:pr-3">
              <input className="contact-input" type="text" placeholder="Name" />
            </div>
            <div className="sm:w-1/2 w-full sm:pl-3">
              <input
                className="contact-input"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <input className="contact-input" type="text" placeholder="Subject" />
          <textarea
            className="contact-input h-48"
            placeholder="Message"
          ></textarea>
          <button
            onClick={sendEmail}
            className="w-full bg-yellow-400 text-gray-800 font-semibold text-xl py-1 hover:text-yellow-400 hover:bg-transparent transition-all rounded-sm"
          >
            Send Message!
          </button>
        </div>
        <div className="lg:w-1/3 w-full text-center lg:text-left lg:mt-0 mt-5 pl-5 font-medium text-lg">
          <p className="mb-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/Sibiu/@45.788589,24.1475603,15z/data=!4m5!3m4!1s0x474c6788fd2c1cd5:0x3ade9d214e3390b4!8m2!3d45.7935607!4d24.1212945"
            >
              <i className="mr-3 text-yellow-400 fas fa-map-marker-alt"></i>
              Romania, Sibiu, Sibiu
            </a>
          </p>
          <p className="mb-2">
            <a href="tel:+40727892022">
              <i className="mr-3 text-yellow-400 fas fa-phone"></i>+40727892022
            </a>
          </p>
          <p className="mb-2">
            <a href="mailto:bogdybogdan34@gmail.com">
              <i className="mr-3 text-yellow-400 fas fa-envelope"></i>
              bogdybogdan34@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center justify-evenly md:hidden w-full">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              <i
                className={`${link.iconClass} text-yellow-400 mt-3 text-2xl`}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
