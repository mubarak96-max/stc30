import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Goitre = () => {
  return (
    <Layout>
      <SEO
        title="Goitre"
        description="Goitre and the stem cell, STC30.  A goitre is an enlargement of the thyroid gland, a butterfly-shaped gland which is present at the front of the throat and below the Adam’s apple."
        keywords="Goitre, stem cell, stc30, neck cure"
      />
      <div className="disease">
        <h1>Goitre</h1>
        <p>
          A goitre is an enlargement of the thyroid gland, a butterfly-shaped
          gland which is present at the front of the throat and below the Adam’s
          apple.
        </p>
        <img src="/goitre.jpg" alt="Goitre and the stem cell" />
        <p>Goitre is classified as diffuse or nodular;</p>
        <ul>
          <li>
            In diffuse goitre the whole thyroid gland swells and its smooth to
            touch.
          </li>
          <li>
            Nodular goitre, solid or fluid-filled lumps called thyroid nodules
            develop in the thyroid gland. Nodular goitre is further classified
            into two types; Uninodular with only one nodule. and multinodular
            with more than one nodule. The nodules may be inactive or toxic.
          </li>
        </ul>
        <p>
          Goitre may also be classified as endemic and sporadic. Endemic goitre
          occurs due to insufficient dietary iodine intake and in sporadic
          goitre, the cause is unknown.
        </p>
        <p>
          Goitre can be caused by lack of iodine, autoimmune disorders like
          Graves' disease, pregnancy, family background, inflammation,
          Hashimoto's disease, radiation exposure, some medication, multinodular
          goitre, aging, thyroid cancer, thyroiditis
        </p>
        <img src="/goitre1.jpg" alt="goitre and the stc30" />
        <p>
          Small goiters that don't cause physical or cosmetic problems aren't a
          concern. But large goiters can make it hard to breathe or swallow and
          can cause a cough and hoarseness.
        </p>
        <p>
          With the stem cell therapy (STC30) you can get treated from goitre.
          The STC30 has large amounts of iodine, it boosts your immune system
          against autoimmune disorders and it will regenerate your thyroid gland
          by stimulating thyroid stem cells that produce thyroid hormones and
          help maintain thyroid hormones.
        </p>
      </div>
    </Layout>
  )
}

export default Goitre
