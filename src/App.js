// React imports.
import React, { Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UpButton from "./COMPONENTS/UpButton";
const Header = React.lazy(() => import("./SECTIONS/Header"));
const Home = React.lazy(() => import("./SECTIONS/Home"));
const About = React.lazy(() => import("./SECTIONS/About"));
const Skills = React.lazy(() => import("./SECTIONS/Skills"));
const Portfolio = React.lazy(() => import("./SECTIONS/Portfolio"));
const Contact = React.lazy(() => import("./SECTIONS/Contact"));

const App = () => {
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
      href: "mailto:dimoiubogdan03@gmail.com",
      iconClass: "fas fa-envelope",
    },
    {
      href: "https://www.linkedin.com/in/dimoiu-bogdan-650b431ba/",
      iconClass: "fab fa-linkedin-in",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      anchorPlacement: "top-center",
    });
  }, []);

  return (
    <div id="app" className="bg-black bg-opacity-80 text-gray-300 leading-7">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen w-full bg-black bg-opacity-80 text-yellow-400 font-bold text-4xl">
            Loading...
          </div>
        }
      >
        <Header />
        <Home links={links} />
        <div className="container mx-auto">
          <About links={links} />
          <Skills />
          <Portfolio />
          <Contact links={links} />
        </div>
        <UpButton />
      </Suspense>
    </div>
  );
};

export default App;
