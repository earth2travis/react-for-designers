import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Learn to Design and Code React apps</h1>
          <p>
            Complete courses about the best tools and design systems. Prototype
            and build apps with React and Swift.
          </p>
          <Link to="/page-2/">Watch the video</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
