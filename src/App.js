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
const Footer = React.lazy(() => import("./SECTIONS/Footer"));

const App = () => {
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
        <Home />
        <div className="container mx-auto">
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
        <UpButton />
      </Suspense>
    </div>
  );
};

export default App;
