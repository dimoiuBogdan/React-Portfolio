const Home = () => {
  return (
    <div
      id="home"
      className="text-center w-full h-screen flex items-center justify-center flex-col text-white font-semibold"
    >
      <h3 className="text-xl">Hello, I'm Bogdan,</h3>
      <h2 className="sm:text-5xl text-4xl my-2 text-yellow-400">
        FRONT-END DEVELOPER
      </h2>
      <h4 className="sm:text-lg text-md">
        Passionate, Hard Working, Always Learning
      </h4>
      <div>
        <button className="text-lg px-4 mt-5 py-0.5 transition-all hover:border-transparent mx-2 border-2 border-yellow-400 rounded-full">
          Download CV
        </button>
        <button className="text-lg px-4 mt-5 py-0.5 transition-all hover:border-transparent mx-2 border-2 border-yellow-400 rounded-full">
          My Skills
        </button>
      </div>
    </div>
  );
};

export default Home;
