import React, { useState, useEffect } from "react";
import "./App.css";
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
import Contact from "./pages/Contact.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div id="loader">
          <div className="position-absolute top-50 px-4 start-50">Loading...</div>
        </div>
      ) : (
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
            <Route element={<Contact />} path="/contact" />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
