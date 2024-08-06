// App.js

import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BottomBar from "./components/BottomBar";
import InteractiveModel from "./components/InteractiveModel";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Projects />
      <Contact />
      <InteractiveModel />
      <BottomBar />
    </div>
  );
}

export default App;
