import React from "react";

const Projects = () => {
  return (
    <div className="bg-slate-800">
      <section id="projects" />
      <div className="container pb-5 mx-auto">
        <div className="text-white font-bold text-4xl font-regular py-5">
          Projects
        </div>
        <div className="text-white flex justify-around text-2xl font-semibold">
          <div>
            <a href="https://devpost.com/software/laservision" target="_blank">
              <div className="container bg-slate-500 p-10 rounded-lg">
                Laser Vision
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/shanboss/MultithreadedServer"
              target="_blank"
            >
              <div
                href="https://github.com/shanboss/MultithreadedServer"
                className="container bg-slate-500 p-10 rounded-lg"
              >
                Multithreaded Server
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://devpost.com/software/gpteach-qgdsn3"
              target="_blank"
            >
              <div className="container bg-slate-500 p-10 rounded-lg">
                GPTeach
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
