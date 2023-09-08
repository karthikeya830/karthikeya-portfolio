import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MainContent from "./MainContent";
import '../styles/tailwind.css';
import '../pages/index.css'
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./ProjectOverview";
const Layout = () => {
  return (
    <div className="layout" >
      <Nav />
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />}></Route>
      </Routes>
      {/* <MainContent /> */}
      <Footer />
    </div>
  );
};

export default Layout;
