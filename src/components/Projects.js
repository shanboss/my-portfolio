import React from "react";

const Projects = () => {
  return (
    <div className="bg-slate-800">
      <section id="projects" />
      <div className="container py-10 mx-auto">
        <div className="text-white font-bold text-4xl font-regular py-10">
          Projects
        </div>
        <div className="text-white flex justify-around text-2xl font-semibold">
          <div>
            <div className="container bg-slate-500 p-10 rounded-lg">
              Laser Vision
            </div>
          </div>
          <div>
            <div className="container bg-slate-500 p-10 rounded-lg">
              Multithreaded Server
            </div>
          </div>
          <div>
            <div className="container bg-slate-500 p-10 rounded-lg">
              GPTeach
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
