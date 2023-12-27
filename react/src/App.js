import React from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import HireTalent from "./pages/HireTalent.js";
import WhatWeDo from "./pages/WhatWeDo.js";
import Team from "./pages/Team.js";
import Portfolio from "./pages/Portfolio.js";
import Blog from "./pages/Blog.js";
import CareerPage from "./pages/CareerPage.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="" />
        <Route element={<HireTalent />} path="/:cetagory" />
        <Route element={<WhatWeDo />} path="/what-we-do" />
        <Route element={<Team />} path="/team" />
        <Route element={<Portfolio />} path="/portfolio" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<CareerPage />} path="careers" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
