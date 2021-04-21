import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Sickle = () => {
  return (
    <Layout>
      <SEO
        title="Sickle Cells"
        description="Sickle Cells and the stem cell, STC30.  Sickle cells is a group of inherited red blood disorders. It occurs after inheritance of two sickle cell genes from parents. People with sickle cells have an abnormal protein in their red blood cells (hemoglobin)."
        keywords="Sickle Cells, stem cell, stc30, anemia, cure"
      />
      <div className="disease">
        <h1>Sickle Cells</h1>
        <p>
          Sickle cells is a group of inherited red blood disorders. It occurs
          after inheritance of two sickle cell genes from parents. People with
          sickle cells have an abnormal protein in their red blood cells
          (hemoglobin).
        </p>
        <p>
          Red blood cells are usually round and flexible and can move easily
          through blood vessels but in sickle cell anemia, the red blood cells
          are shaped like a sicke or crescent moons and can get stuck in small
          blood vessels slowing or stopping blood flow and oxygen to parts of
          the body.
        </p>
        <img src="/sickle.jpg" alt="sickle cell and stc30" />
        <p>
          Symptoms and complications include; fatigue, delayed growth, pain,
          delayed growth or puberty, swelling and inflammation of hands and
          feet, sudden pooling of blood in the spleen and liver congestion,
          frequent infections, lung and heart injury, leg wounds, pale skin,
          stroke, eye damage and vision problems.
        </p>
        <img src="/sickle2.jpg" alt="sickle cell and stc30" />
        <p>
          If you carry the sickle cell trait, seeing a genetic counselor before
          trying to conceive can help you understand your risk of having a child
          with sickle cell anemia. They can also explain possible treatments,
          preventive measures and reproductive options.
        </p>
        <img src="/sickle1.jpg" alt="sickle cell and stc30" />
        <p>
          Sickle cells can be treated by a stem cell or bone marrow transplant.
          The person with sickle cells has bone marrow that produces red blood
          cells with defective hemoglobin which is then replaced by a healthy
          one got from a donor. The stem cell therapy STC30 is proven to cure
          sickle cells. It stimulates the body's stem cells, replicate cells and
          replace damaged or dead cells. The STC30 enables the body to produce
          healthy red blood cells replacing defective ones.
        </p>
      </div>
    </Layout>
  )
}

export default Sickle
