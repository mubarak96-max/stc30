import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Ulcers = () => {
  return (
    <Layout>
      <SEO
        title="Ulcers"
        description="ulcer and the stem cell, STC30. Stomach ulcers also known as gastric ulcers are painful sores in the stomach lining. They are a type of peptic ulcer disease which affect both the stomach and the small intestines."
        keywords="ulcers, stem cell, stc30, stomach, constipation, hernia"
      />
      <div className="disease">
        <h1>Ulcers</h1>
        <p>
          Stomach ulcers also known as gastric ulcers are painful sores in the
          stomach lining. They are a type of peptic ulcer disease which affect
          both the stomach and the small intestines. Stomach ulcers occur when
          the thick layer of mucus that protects your stomach from digestive
          juices is reduced which allows these acids to eat away at the tissues
          that line the stomach causing an ulcer.
        </p>
        <img src="/ulcers.jpg" alt="what is ulcers" />
        <p>Peptic ulcers include:</p>
        <ul>
          <li>Gastric ulcers that occur on the inside of the stomach</li>
          <li>
            Duodenal ulcers that occur on the inside of the upper portion of
            your small intestine (duodenum)
          </li>
        </ul>
        <p>
          The causes of stomach ulcers include; the Helicobacter pylori
          bacteria, a class of pain killers called non-steroidal
          anti-inflammatories, excess stomach acidity which maybe brought about
          by stress, smoking, genetics and some foods, Zollinger-Ellison
          disease. Certain behaviours and factors increase the chances of
          developing stomach ulcers which include frequent steroid usage, over
          consuming of alcohol, genetics, smoking, overproducing
          calcium-hypercalcemia.
        </p>
        <img src="/ulcers1.png" alt="causes of ulcers" />
        <p>
          Symptoms; heartburn, loss of appetite, burning pain in the stomach
          between meals, nausea, bloating, dark stool.
        </p>
        <p>
          The STC30 is proven to treat ulcers 100%. It strengthens the immune
          system, stimulate production of intestinal cells, repairs damaged
          tissues in the stomach and prevent digestive acids from taking action
          by strengthening the mucous cells.
        </p>
      </div>
    </Layout>
  )
}

export default Ulcers
