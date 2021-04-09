import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider/slider"
import Diseases from "../components/diseases"
import About from "../components/about"
import Questions from "../components/questions"

const IndexPage = () => (
  <Layout>
    <SEO
      title="STEM CELL STC30"
      description="STC30 a breakthrough in medical science with the stem cell technology, the origin of stem cell treatment in curing and prevention of diseases. A plant-based stem cell which uses stem cells to manage, prevent or address several health complications  manufactured by Mibelle Bio Chemistry in Zurich Switzerland and distributed worldwide by SuperLifeWorld based in Malaysia."
      keywords="stem cell, STC30, medicine technology, cancer cure, best medicine, STC30, stem cell, stem cell treatment, treats many diseases. the STC30 can treat more than 140 diseases even those formerly known as incurable, stem cells, stc30, medicine for incurable diseases"
    />
    <Slider />
    <div className="page-links">
      <p>Go to</p>
      <div className="page-link">
        <Link to="#diseases">Diseases</Link>
      </div>
      <div className="page-link">
        <Link to="#about">About</Link>
      </div>
      <div className="page-link">
        <Link to="#questions">Frequently Asked Questions</Link>
      </div>
    </div>
    <div className="home-page">
      <div className="info">
        <p>
          A Breakthrough In Medical Science With The Stem Cell Technology. The
          search for the fountain of youth by man has been in progress since
          time immemorial and there is nothing new about that. What has however
          changed are the methods of research and application. There has been
          progress in this aspect. One of the most radical advances in the field
          of health and medical advancement revolves around the use of adult
          stem cells (stem cell therapy).
        </p>

        <img src="/image2.jpeg" alt="Uses of A stem cell" />
      </div>
      <div>
        <h2 id="diseases">Diseases</h2>
        <Diseases />
      </div>
      <div>
        <h2 id="about">About</h2>
        <About />
      </div>
      <div id="questions">
        <h2>Frequently Asked Questions</h2>
        <Questions />
      </div>
    </div>
  </Layout>
)

export default IndexPage
