import { useState } from "react";
import { motion } from "framer-motion";

import iBLOG from "../IMAGES/PORTFOLIO/iBLOG.png";
import simpleChatIMG from "../IMAGES/PORTFOLIO/simpleChatIMG.png";
import myPortfolioIMG from "../IMAGES/PORTFOLIO/myPortfolioIMG.png";
import catProjectIMG from "../IMAGES/PORTFOLIO/catProjectIMG.png";
import transactionsTrackerIMG from "../IMAGES/PORTFOLIO/transactionsTrackerIMG.png";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      title: "iBlog",
      description:
        "This is a basic blog platform. A project idea that I knew would teach me a lot, and so it did.",
      builtWith: "React, Tailwind, HighlightJS, Firebase, MaterialUI",
      features: "Post, Read, Sort, Authenticate",
      img: iBLOG,
      github: "https://github.com/dimoiuBogdan/React-iBlog",
      url: "https://react-iblog.netlify.app/",
      showCover: true,
    },
    {
      title: "Simple Chat",
      description:
        "Simple, real time chat room. An interesting project I built using Firebase",
      builtWith: "React, Tailwind, Firebase",
      features: "Authenticate, Write, Read",
      img: simpleChatIMG,
      github: "https://github.com/dimoiuBogdan/React-Firebase-Tailwind-Chat",
      url: "https://react-chat-firebase.netlify.app/",
      showCover: true,
    },
    {
      title: "My Portfolio",
      description: "The website you are browsing right now.",
      builtWith: "React, Tailwind, AOS",
      features: "Read, Contact",
      img: myPortfolioIMG,
      github: "https://github.com/dimoiuBogdan/React-Portfolio",
      url: "https://dimoiu-bogdan.netlify.app/",
      showCover: true,
    },
    {
      title: "Cat Project",
      description:
        "A project built using Cat-API with navigation, pagination, favorite, 'cause who does not like cute cats, right? ",
      builtWith: "React, Tailwind, Axios",
      features: "Fetch, Favorite, Pagination",
      img: catProjectIMG,
      github: "https://github.com/dimoiuBogdan/React-Cat-Api-Project",
      url: "https://react-cat-api-bogdan.netlify.app/",
      showCover: true,
    },
    {
      title: "Transactions Tracker",
      description:
        "A simple expense tracker I built because I really liked the design and the idea of having a visual money management app",
      builtWith: "React, Tailwind",
      features: "Add / Remove Transactions",
      img: transactionsTrackerIMG,
      github:
        "https://github.com/dimoiuBogdan/React-Tailwind-Budget-Calculator",
      url: "https://react-tailwind-budget-calculator.netlify.app/",
      showCover: true,
    },
  ]);

  const flipCover = (url) => {
    const hoveredProject = projects.filter((project) => project.url === url);
    setProjects(
      projects.map((project) => {
        project === hoveredProject[0]
          ? (project.showCover = !project.showCover)
          : (project.showCover = true);
        return project;
      })
    );
  };

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="lg:py-20 py-14">
      <h2 className="title text-center mb-8">My Projects</h2>
      <div className="flex items-center flex-wrap">
        {projects.map((project, i) => (
          <div
            data-aos="fade-in"
            data-aos-delay={i * 200}
            key={project.url}
            className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full h-72 md:h-80 p-4"
          >
            <div
              className={`cursor-default overflow-hidden border-2 border-yellow-500 shadow-md h-full text-gray-300 bg-black bg-opacity-20 flex justify-between rounded-lg ${
                project.showCover ? "" : "px-4 py-2"
              }`}
              onMouseEnter={() => flipCover(project.url)}
              onMouseLeave={() => flipCover(project.url)}
            >
              {!project.showCover ? (
                <motion.div
                  variants={backdrop}
                  transition={{ duration: 0.3 }}
                  animate={project.showCover ? "hidden" : "visible"}
                  initial={project.showCover ? "visible" : "hidden"}
                  className="w-full"
                >
                  <div className="flex w-full justify-between">
                    <h3 className="text-2xl md:text-xl xl:text-2xl text-center font-medium mb-2 text-yellow-400">
                      {project.title}
                    </h3>
                    <div>
                      <a target="_blank" rel="noreferrer" href={project.github}>
                        <i className="text-2xl text-yellow-400 transition-all hover:scale-110 hover:text-yellow-500 transform fas fa-eye"></i>
                      </a>
                      <a target="_blank" rel="noreferrer" href={project.url}>
                        <i className="text-2xl ml-3 text-yellow-400 transition-all hover:scale-110 hover:text-yellow-500 transform fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                  <p>
                    <span className="font-medium">Description:</span>{" "}
                    {project.description}
                  </p>
                  <p>
                    <span className="font-medium">Built with:</span>{" "}
                    {project.builtWith}
                  </p>
                  <p className="block md:hidden xl:block">
                    <span className="font-medium">Main features:</span>{" "}
                    {project.features}
                  </p>
                </motion.div>
              ) : (
                <motion.img
                  variants={backdrop}
                  transition={{ duration: 0.5 }}
                  animate={project.showCover ? "visible" : "hidden"}
                  initial={project.showCover ? "hidden" : "visible"}
                  src={project.img}
                  className="h-full w-full object-cover filter brightness-75"
                  alt="project-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
