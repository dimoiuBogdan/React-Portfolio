import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      title: "iBlog",
      description:
        "This is a basic blog platform. A project idea that I knew would teach me a lot, and so it did.",
      builtWith: "React, Tailwind, HighlightJS, Firebase, MaterialUI",
      features: "Post, Read, Sort, Authenticate",
      img: "https://developers.redhat.com/blog/wp-content/uploads/2020/04/React-logo.png",
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
      img: "https://developers.redhat.com/blog/wp-content/uploads/2020/04/React-logo.png",
      github: "https://github.com/dimoiuBogdan/React-Firebase-Tailwind-Chat",
      url: "https://react-chat-firebase.netlify.app/",
      showCover: true,
    },
    {
      title: "My Portfolio",
      description: "The website you are browsing right now.",
      builtWith: "React, Tailwind, AOS",
      features: "Read, Contact",
      img: "https://developers.redhat.com/blog/wp-content/uploads/2020/04/React-logo.png",
      github: "https://github.com/dimoiuBogdan/React-Portfolio",
      url: "https://dimoiu-bogdan.netlify.app/",
      showCover: true,
    },
    {
      title: "Cat Project",
      description: "",
      builtWith: "React, Tailwind, HighlightJS, Firebase, MaterialUI",
      features: "Posting, Reading, Sorting, Authenticating",
      img: "https://developers.redhat.com/blog/wp-content/uploads/2020/04/React-logo.png",
      github: "https://github.com/dimoiuBogdan/React-iBlog",
      url: "https://react-iblog.netlify.app/",
      showCover: true,
    },
    {
      title: "iBlog",
      description:
        "This is a basic blog platform. Also, this is my first medium size project I built.",
      builtWith: "React, Tailwind, HighlightJS, Firebase, MaterialUI",
      features: "Posting, Reading, Sorting, Authenticating",
      img: "https://developers.redhat.com/blog/wp-content/uploads/2020/04/React-logo.png",
      github: "https://github.com/dimoiuBogdan/React-iBlog",
      url: "https://react-iblog.netlify.app/",
      showCover: true,
    },
    {
      title: "iBlog",
      description:
        "This is a basic blog platform. Also, this is my first medium size project I built.",
      builtWith: "React, Tailwind, HighlightJS, Firebase, MaterialUI",
      features: "Posting, Reading, Sorting, Authenticating",
      img: "https://developers.redhat.com/blog/wp-content/uploads/2020/04/React-logo.png",
      github: "https://github.com/dimoiuBogdan/React-iBlog",
      url: "https://react-iblog.netlify.app/",
      showCover: true,
    },
    {
      title: "iBlog",
      description:
        "This is a basic blog platform. Also, this is my first medium size project I built.",
      builtWith: "React, Tailwind, HighlightJS, Firebase, MaterialUI",
      features: "Posting, Reading, Sorting, Authenticating",
      img: "https://developers.redhat.com/blog/wp-content/uploads/2020/04/React-logo.png",
      github: "https://github.com/dimoiuBogdan/React-iBlog",
      url: "https://react-iblog.netlify.app/",
      showCover: true,
    },
  ]);

  const flipCover = (url) => {
    const hoveredProject = projects.filter((project) => project.url === url);
    setProjects(
      projects.map((project) => {
        hoveredProject[0].showCover = !hoveredProject[0].showCover;
        return project;
      })
    );
  };

  return (
    <div className="lg:py-20 py-14">
      <h2 className="title text-center mb-8">My Projects</h2>
      <div className="flex items-center flex-wrap">
        {projects.map((project) => (
          <div key={project.title} className="w-1/3 h-64 p-4">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer shadow-md h-full text-gray-300 bg-black bg-opacity-20 flex justify-between rounded-md ${
                project.showCover ? "" : "px-4 py-2"
              }`}
              onMouseEnter={() => flipCover(project.url)}
              onMouseLeave={() => flipCover(project.url)}
            >
              {!project.showCover ? (
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl text-center font-medium mb-2 text-yellow-400">
                      {project.title}
                    </h3>
                    <div>
                      <a target="_blank" rel="noreferrer" href={project.github}>
                        <i className="text-xl text-yellow-400 transition-all hover:scale-110 hover:text-yellow-500 transform fas fa-eye"></i>
                      </a>
                      <a target="_blank" rel="noreferrer" href={project.url}>
                        <i className="text-xl ml-3 text-yellow-400 transition-all hover:scale-110 hover:text-yellow-500 transform fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                  <p>
                    <span className="font-medium">Built with:</span>{" "}
                    {project.builtWith}
                  </p>
                  <p>
                    <span className="font-medium">Description:</span>{" "}
                    {project.description}
                  </p>
                  <p>
                    <span className="font-medium">Main features:</span>{" "}
                    {project.features}
                  </p>
                </div>
              ) : (
                <img
                  src={project.img}
                  className="h-full w-full object-cover"
                  alt="project-cover"
                />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
