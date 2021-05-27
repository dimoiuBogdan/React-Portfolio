const Skills = () => {
  return (
    <div>
      <h2 className="text-center title mb-8">Technologies I Use</h2>
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>HTML</h2>
            <i className="fab fa-html5 text-3xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>CSS</h2>
            <i className="fab fa-css3-alt text-3xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>JAVASCRIPT</h2>
            <i className="fab fa-js-square text-3xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>REACT</h2>
            <i className="fab fa-react text-3xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>FIREBASE</h2>
            <i className="fas fa-fire text-3xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>GIT</h2>
            <i className="fab fa-git-alt text-3xl text-yellow-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
