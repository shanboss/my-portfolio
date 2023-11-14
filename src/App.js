// App.js

import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Projects />
      <Contact />
      <BottomBar />
    </div>
  );
}

export default App;
