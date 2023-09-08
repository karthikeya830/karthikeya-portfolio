import * as React from "react"
import Layout from "../components/Layout"
import '../styles/tailwind.css';
import {BrowserRouter} from 'react-router-dom'

const IndexPage = () => {
  return (
    <div className="index">
      <BrowserRouter >
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
