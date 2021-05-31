const Contact = () => {
  return (
    <div className="pb-7" id="contact-section">
      <h2 className="title text-center mb-9">Let's Talk</h2>
      <div className="w-1/2 mx-auto">
        <div>
          <div className="flex items-center justify-evenly">
            <div className="w-1/2 pr-3 mb-6 text-xl text-gray-800">
              <input
                className="w-full py-1 px-2 rounded-sm shadow-md"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="w-1/2 pl-3 mb-6 text-xl text-gray-800">
              <input
                className="w-full py-1 px-2 rounded-sm shadow-md"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <input
            className="w-full py-1 px-2 mb-6 text-xl text-gray-800"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="w-full mb-6 py-1 px-2 h-48 text-xl text-gray-800"
            placeholder="Message"
          ></textarea>
          <button className="w-full bg-yellow-400 text-gray-800 font-semibold text-xl py-1 hover:text-yellow-400 hover:bg-transparent transition-all rounded-sm">
            Send Message!
          </button>
        </div>
        <div>
          <p>Romania, Sibiu, Sibiu</p>
          <p>+40727892022</p>
          <p>bogdybogdan34@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
