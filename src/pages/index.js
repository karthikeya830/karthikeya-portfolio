import * as React from "react"
import Layout from "../components/Layout"
import ProjectOverview from "../components/ProjectOverview"
import '../styles/tailwind.css';
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const IndexPage = () => {
  return (
    // <BrowserRouter>
      <div className="index">
        <Layout />
      {/* <Routes > */}
        {/* <Route path="/" element={<Layout/>} /> */}
        {/* <Route path="/:id" element={<ProjectOverview /> } /> */}
      {/* </Routes> */}
      </div>
    // </BrowserRouter>
  )
}

export default IndexPage

export const Head = () => <title>Karthikeya Portfolio</title>