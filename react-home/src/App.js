import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  margin: 1rem;
  text-align: center;
`;

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
