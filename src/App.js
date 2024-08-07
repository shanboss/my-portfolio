// App.js

import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import InteractiveModel from "./components/InteractiveModel";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Content />
      <Projects />
      <Contact />
      <InteractiveModel />
      <div className="bg-black w-full h-16"></div>
    </div>
  );
}

export default App;
