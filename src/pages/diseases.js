import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../components/diseasesData"

function SingleDisease({ id, disease, cause, treatment, link }) {
  return (
    <div className="single-disease" key={id}>
      <div className="disease-title">
        <h2>{disease}</h2>
      </div>

      <div className="about-disease">
        <p>
          {cause.substring(0, 100)} ...<Link to={link}>read more</Link>
        </p>
      </div>
    </div>
  )
}

function Diseases() {
  const [diseases, setDiseases] = useState(data)
  return (
    <Layout>
      <SEO
        title="Diseases"
        description="The STC30 can prevent, manage and cure more than 130
          diseases. Here are some of the diseases treated by the STC30 and how
          they are managed. The STC30 can correct diseases and disorders of all
          body systems."
        keywords="Diabetes, stem cell, stc30, high blood pressure, gout treatment, sinus, vertigo, sore throat, pink eye, cancer, allergies, anemia, renal, urinary"
      />
      <div className="diseases-intro">
        <img src="/dis.jpg" alt="benefits of stc30" />
        <p>
          Most of the healthy complications are as a result of cellular
          dysfunction or immunity deficiency which can be corrected by the
          STC30. And so the STC30 can prevent, manage and cure more than 130
          diseases. Here are some of the diseases treated by the STC30 and how
          they are managed. The STC30 can correct diseases and disorders of all
          body systems.
        </p>
      </div>
      <div className="diseases-list">
        {diseases.map(item => {
          return <SingleDisease key={item.id} {...item} />
        })}

        <p>On addition the STC30 can treat more than 140 diseases.</p>
      </div>
    </Layout>
  )
}

export default Diseases
