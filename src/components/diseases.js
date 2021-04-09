import React, { useState } from "react"
import data from "../components/diseasesData"

function SingleDisease({ id, disease, cause, treatment }) {
  const [showDisease, setShowDisease] = useState(false)
  return (
    <div className="single-disease" key={id}>
      <div className="disease-title">
        <h2>{disease}</h2>
        <button onClick={() => setShowDisease(!showDisease)}>
          {showDisease ? "Hide" : "Show More"}
        </button>
      </div>
      {showDisease && (
        <div className="about-disease">
          <p>{cause}</p>
          <p>{treatment}</p>
        </div>
      )}
    </div>
  )
}

function Diseases() {
  const [diseases, setDiseases] = useState(data)
  return (
    <>
      <div className="diseases-intro">
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
    </>
  )
}

export default Diseases
