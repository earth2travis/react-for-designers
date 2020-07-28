import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/sections"
import Wave from "../components/wave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Learn to <br />
            Design and Code React apps
          </h1>
          <p>
            Complete courses about the best tools and design systems. Prototype
            and build apps with React and Swift.
          </p>
          <Link to="/page-2/">Watch the video</Link>
          <div className="Logos">
            <img
              src={require("../images/logo-sketch.png")}
              alt="Sketch Logo"
              width="50"
            />
            <img
              src={require("../images/logo-figma.png")}
              alt="Figma Logo"
              width="50"
            />
            <img
              src={require("../images/logo-studio.png")}
              alt="Studio Logo"
              width="50"
            />
            <img
              src={require("../images/logo-framer.png")}
              alt="Framer Logo"
              width="50"
            />
            <img
              src={require("../images/logo-react.png")}
              alt="React Logo"
              width="50"
            />
            <img
              src={require("../images/logo-swift.png")}
              alt="Swift Logo"
              width="50"
            />
          </div>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
          <Card
            title="Design System"
            text="10 Sections"
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title="React for Designers"
            text="12 Sections"
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            title="Sound Designer"
            text="5 Sections"
            image={require("../images/wallpaper3.jpg")}
          />
          <Card
            title="ARKit 2"
            text="10 Sections"
            image={require("../images/wallpaper4.jpg")}
          />
        </div>
      </div>
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/ product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
    </div>
  </Layout>
)

export default IndexPage
