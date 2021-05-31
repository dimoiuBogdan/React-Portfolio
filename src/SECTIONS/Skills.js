const Skills = () => {
  const skills = [
    {
      content: "HTML",
      iconClass: "fab fa-html5",
    },
    {
      content: "CSS",
      iconClass: "fab fa-css3-alt",
    },
    {
      content: "TAILWIND",
      iconClass: "fas fa-pencil-ruler",
    },
    {
      content: "BOOTSTRAP",
      iconClass: "fab fa-bootstrap",
    },
    {
      content: "JAVASCRIPT",
      iconClass: "fab fa-js-square",
    },
    {
      content: "REACT",
      iconClass: "fab fa-react",
    },
    {
      content: "FIREBASE",
      iconClass: "fas fa-fire",
    },
    {
      content: "GIT",
      iconClass: "fab fa-git-alt",
    },
    {
      content: "WORDPRESS",
      iconClass: "fab fa-wordpress",
    },
  ];
  return (
    <div className="md:py-14 py-7" id="skills-section">
      <h2 className="text-center title mb-8">Technologies I Use</h2>
      <div className="flex flex-wrap justify-evenly items-center">
        {skills.map((skill, i) => (
          <div
            key={skill.content}
            className="skill-card-wrap"
            data-aos="fade-in"
            data-aos-delay={i * 100}
          >
            <div className="skill-card">
              <h2>{skill.content}</h2>
              <i className={`${skill.iconClass} text-3xl text-yellow-400`}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
