// React imports.
import React, { Suspense } from "react";
// Sections lazy imports.
const Header = React.lazy(() => import("./SECTIONS/Header"));
const Home = React.lazy(() => import("./SECTIONS/Home"));
const About = React.lazy(() => import("./SECTIONS/About"));
const Skills = React.lazy(() => import("./SECTIONS/Skills"));
const Portfolio = React.lazy(() => import("./SECTIONS/Portfolio"));
const Contact = React.lazy(() => import("./SECTIONS/Contact"));
const Footer = React.lazy(() => import("./SECTIONS/Footer"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Header />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
