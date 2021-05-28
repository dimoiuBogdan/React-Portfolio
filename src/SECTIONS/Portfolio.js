const Portfolio = () => {
  const projects = [
    {
      title: "",
      builtWith: "",
      features: "",
      img: "",
    },
  ];
  return (
    <div className="lg:py-20 py-14">
      <h2 className="title text-center mb-8">My Projects</h2>
      <div className="flex items-center justify-evenly flex-wrap">
        <div className="w-1/3">
          <div className="shadow-md bg-black bg-opacity-20 flex items-center justify-between rounded-md px-4 py-2 font-medium">
            <div>
              <h3>iBlog</h3>
              <p>Blog platform built using :</p>
              <p>Features : </p>
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
