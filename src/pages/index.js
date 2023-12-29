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

export const Head = () => (
  <>
    <title>Karthikeya Portfolio</title>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1879998428337450"
      crossOrigin="anonymous"
    ></script>
  </>
);