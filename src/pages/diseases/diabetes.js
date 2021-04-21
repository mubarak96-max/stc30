import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Diabetes = () => {
  return (
    <Layout>
      <SEO
        title="Diabetes"
        description="Diabetes and the stem cell, STC30. Diabetes is a disease that occurs when the blood sugar (glucose) is too high. "
        keywords="Diabetes, stem cell, stc30, cure"
      />
      <div className="disease">
        <h1>Diabetes</h1>
        <img src="/diabetes.jpg" alt="diabetes and stc30" />
        <p>
          Diabetes is a disease that occurs when the blood sugar (glucose) is
          too high. Blood glucose is the main source of energy and comes from
          the foods one eat. Insulin, a hormone made by the pancreas, helps
          glucose from food get into the cells to be used for energy.
        </p>
        <p>There are two types of diabetes;</p>
        <ul>
          <li>
            <p>
              Type 1, this occurs when the body fails to produce insulin. People
              with type 1 diabetes take in artificial insulin to stay alive. The
              exact cause is unknown. Usually, the body's own immune system
              which normally fights harmful bacteria and viruses mistakenly
              destroy the insulin producing cells in the body.
            </p>
          </li>
          <li>
            <p>
              Type 2 diabetes, affects the way the body uses insulin. While the
              body still makes insulin, the cells in the body do not respond to
              it effectively as it normally would and this is the most common
              type of diabetes. The exact cause isn't known but lifestyle
              choices, genetics and the environment plays a big role.
            </p>
          </li>
        </ul>
        <img src="/diabetes2.jpg" alt="diabetes and the stc30" />
        <p>
          Diabetes symptoms vary depending on how much your blood sugar is
          elevated. Some people, especially those with prediabetes or type 2
          diabetes, may sometimes not experience symptoms. In type 1 diabetes,
          symptoms tend to come on quickly and be more severe.
        </p>
        <p>
          Some of the signs and symptoms of type 1 diabetes and type 2 diabetes;
          frequent urination, frequent infections such as vaginal infections,
          gums or skin infections, unclear eye sight, fatigue, increased hunger,
          wounds that don't heal, thirst, swollen gums, irritation, presence of
          ketones in the urine, sudden weight loss, sores, dark skin
        </p>
        <p>Risk factors for diabetes depend on the type of diabetes</p>
        <p>
          Risk factors for type 1 diabetes include; family history, the presence
          of damaging immune system cells environmental factors.
        </p>
        <p>
          Risk factors for prediabetes and type 2 diabetes include; overweight,
          inactivity, high cholesterol, high blood pressure and aging
        </p>
        <img src="/diabetes1.jpg" alt="diabetes and stem cell" />
        <p>
          Diabetes can lead to nerve damage, skin conditions, heart disease, eye
          damage, weight loss, hearing impairment, alzheimer's disease, stroke,
          foot damage, kidney damage, depression, and dental problems.
        </p>
        <p>
          The currently available treatments can control diabetes to a certain
          level but can't heal it completely and one has to use them for all
          life. But the stem cell therapy has been so effective in treating
          diabetes because it helps remove excess blood sugar, rejuvenates the
          pancreas and differentiate or regenerates into the pancreatic
          beta-islet cells to produce more insulin and also brings balance to
          the immune system so that it stops rejecting the insulin.
        </p>
      </div>
    </Layout>
  )
}

export default Diabetes
