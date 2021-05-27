const Skills = () => {
  return (
    <div>
      <h2 className="text-center title mb-12">Technologies I Use</h2>
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>HTML</h2>
            <i className="fab fa-html5 text-2xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>CSS</h2>
            <i className="fab fa-css3-alt text-2xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>JAVASCVRIPT</h2>
            <i className="fab fa-js-square text-2xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>REACT</h2>
            <i className="fab fa-react text-2xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>FIREBASE</h2>
            <i className="fas fa-fire text-2xl text-yellow-400"></i>
          </div>
        </div>
        <div className="skill-card-wrap">
          <div className="skill-card">
            <h2>GIT</h2>
            <i className="fab fa-git-alt text-2xl text-yellow-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
