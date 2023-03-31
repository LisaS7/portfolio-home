import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MindBlank from "./pages/Projects/MindBlank";
import About from "./pages/About";
import Tools from "./pages/Tools";
import { Routes, Route } from "react-router-dom";
import { PageContainer } from "./containers/PageContainer";

function App() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/mind-blank" element={<MindBlank />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
