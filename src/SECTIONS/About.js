import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const About = () => {
  return (
    <div id="about-section" className="bg-black bg-opacity-80">
      <div className="container min-h-50vh w-full py-24 mx-auto flex items-center justify-evenly">
        <div
          id="about-image"
          className="hidden text-center h-96 w-full max-w-sm border-2 lg:flex border-yellow-400 text-yellow-400 rounded-xl shadow-lg hover:shadow-xl justify-evenly items-end p-4"
        >
          <a
            className="hover:text-yellow-500 transition-all transform hover:scale-110"
            href="https://github.com/dimoiuBogdan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            className="hover:text-yellow-500 transition-all transform hover:scale-110"
            href="https://www.instagram.com/bogdan_dimoiu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
          <a
            className="hover:text-yellow-500 transition-all transform hover:scale-110"
            href="tel:+40727892022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PhoneIcon fontSize="large" />
          </a>
          <a
            className="hover:text-yellow-500 transition-all transform hover:scale-110"
            href="mailto:bogdybogdan34@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon fontSize="large" />
          </a>
        </div>
        <div className="text-justify text-gray-300 leading-7 lg:w-1/2 w-full text-lg px-6">
          <h2 className="text-yellow-400 font-medium text-4xl">About Me</h2>
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
          <div className="flex items-center justify-center lg:justify-start">
            <button className="button w-32">Skills</button>
            <button className="button w-32">Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
