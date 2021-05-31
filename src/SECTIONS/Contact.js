const Contact = () => {
  return (
    <div className="py-14" id="contact-section">
      <h2 className="title text-center mb-9">Let's Talk</h2>
      <div>
        <div>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button>Send Message!</button>
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
