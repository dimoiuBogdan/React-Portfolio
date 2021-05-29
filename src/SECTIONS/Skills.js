const Skills = () => {
  const skills = [
    {
      content: "HTML",
      aosDelay: 100,
      iconClass: "fab fa-html5",
    },
    {
      content: "CSS",
      aosDelay: 200,
      iconClass: "fab fa-css3-alt",
    },
    {
      content: "JAVASCRIPT",
      aosDelay: 300,
      iconClass: "fab fa-js-square",
    },
    {
      content: "REACT",
      aosDelay: 400,
      iconClass: "fab fa-react",
    },
    {
      content: "FIREBASE",
      aosDelay: 500,
      iconClass: "fas fa-fire",
    },
    {
      content: "GIT",
      aosDelay: 600,
      iconClass: "fab fa-git-alt",
    },
  ];
  return (
    <div>
      <h2 className="text-center title mb-8">Technologies I Use</h2>
      <div className="flex flex-wrap justify-evenly items-center">
        {skills.map((skill) => (
          <div
            key={skill.content}
            className="skill-card-wrap"
            data-aos="fade-in"
            data-aos-delay={skill.aosDelay}
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
