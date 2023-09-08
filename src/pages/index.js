import * as React from "react"
import Layout from "../components/Layout"
import '../styles/tailwind.css';

const IndexPage = () => {
  return (
    <div className="index">
        <Layout />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
