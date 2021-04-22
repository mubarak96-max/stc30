import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider/slider"

const IndexPage = () => (
  <Layout>
    <SEO
      title="STEM CELL STC30"
      description="STC30 a breakthrough in medical science with the stem cell technology, the origin of stem cell treatment in curing and prevention of diseases. A plant-based stem cell which uses stem cells to manage, prevent or address several health complications  manufactured by Mibelle Bio Chemistry in Zurich Switzerland and distributed worldwide by SuperLifeWorld based in Malaysia. The STC30 can treat more than 140 diseases even those formerly known as incurable."
      keywords="superlife, stem cell research, stem cell benefits, stem cell therapy, applications of stem cells, stem cell medicine, super life STC30, natural medicine, stc30 side effects, high blood pressure, cancer cure, the cure, sore throat, pink eye, skin peeling, eyes problems, allergies, kidney disease, lung, neck, renal, urinary, cure all, modern medicine, stc30 benefits, best medicine, gout, home remedy, sinusitis, vertigo treatment, fda approved  "
    />
    <Slider />

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
        <img src="/types.jpg" alt="Uses of A stem cell" />
        <p>
          Since 2015, STC30 has been proven in more than 120 countries, in
          Europe, Asia, Latin and North America plus Africa. It is the origin of
          the stem cell treatment in curing and prevention of diseases. And so
          it is considered the last hope for doctors as it can treat and manage
          more than 140 health complications with no side effects. The STC30
          will renew your life. Your life is safe with the STC30.
        </p>
      </div>
    </div>
    <Link to="/about" class="more-link">
      Learn more about the STC30
    </Link>
  </Layout>
)

export default IndexPage
