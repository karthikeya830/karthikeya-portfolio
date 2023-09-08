import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MainContent from "./MainContent";
import '../styles/tailwind.css';
import '../pages/index.css'
const Layout = () => {
  return (
    <div className="layout" >
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Layout;
