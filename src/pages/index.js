import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image5 from "../components/slider/images/Image5"
import Questions from "../components/questions"

const IndexPage = () => (
  <Layout>
    <SEO
      title="SuperLife STC30"
      description="STC30 a breakthrough in medical science with the stem cell technology, the origin of stem cell treatment in curing and prevention of diseases. A plant-based stem cell which uses stem cells to manage, prevent or address several health complications  manufactured by Mibelle Bio Chemistry in Zurich Switzerland and distributed worldwide by SuperLifeWorld based in Malaysia. The STC30 can treat more than 140 diseases even those formerly known as incurable."
      keywords="superlife, stem cell research, stem cell benefits, stem cell therapy, applications of stem cells, stem cell medicine, super life STC30, natural medicine, stc30 side effects, high blood pressure, cancer cure, the cure, sore throat, pink eye, skin peeling, eyes problems, allergies, kidney disease, lung, neck, renal, urinary, cure all, modern medicine, stc30 benefits, best medicine, gout, home remedy, sinusitis, vertigo treatment, fda approved  "
    />
    {/* <Slider /> */}
    <div className="bg">
      <Image5 />
    </div>

    <section className="home">
      <p className="intro">
        You no longer have to lose hope of regaining your normal health or spend
        lots of money in treatment
      </p>
      <article className="video">
        <video
          src="/stc30-vid.mp4"
          width="100%"
          autoPlay={false}
          controls="controls"
        ></video>
      </article>
      <article className="info">
        <h2>what is STC30</h2>
        <div className="desc">
          <p>
            STC30 is an acronym for Super Life Total Care 30 or Stem Cell 30
            days of transformation, meaning that one has 30 days to transform
            their lives using the stem cell. It is a plant-based stem cell, a
            product ahead of its time which uses stem cells to manage, prevent
            or address several health complications. It is the origin of stem
            cell treatment in curing and prevention of diseases
          </p>
          <img src="/s2.jpeg" alt="stem cell STC30" />
        </div>
      </article>
      <article className="info">
        <h2>what are stem cells</h2>
        <div className="desc">
          <p>
            Stem cells are unspecialized cells of the human body. They are able
            to differentiate into any cell of the body and have the ability of
            self-renewal.
          </p>
          <p>
            When life begins, a single giant cell (the zygote) replicates
            repeatedly to give rise to every other cell in the body. The cell
            from which other cells spring forth contain the entire genetic code
            of the person (the genetic code is the biological software that
            produces and defines each cell type in the body). After the body has
            been developed, among the trillions of cells in the body remains a
            population of quiescent stem cells waiting to be called into action
            to help in the repairs of damaged tissue. These stem cells abound
            everywhere. They are present in the body’s adipose tissue, bone
            marrow, and in every single tissue compartment. The stem cells are
            nature’s repair kit. They wait readily to repair tissues whenever
            the need arises.
          </p>
          <img src="/tissue.jpg" alt="tissue formation with the stc30" />
          <p>
            The body has over 220 different cell types but the stem cells don't
            have any specific function and can become any of the spcialized
            cells in the body such as nerve cells, skin cells, muscle cells,
            hair cells, red blood cells, beta cells, cells of the heart, kidney,
            liver, bones, brain, muscle etc. Cells are the building blocks of
            our bodies, they form tissues, organs and then the body systems.
            With over 50 trillion cells in our bodies, cellular health is
            crucial to our health
          </p>
          {/* <img src="/types.jpg" alt="Uses of A stem cell" /> */}
        </div>
      </article>
      <article className="info">
        <h2>ingredients of the STC30</h2>
        <div className="desc">
          <p>
            BILBERRY EXTRACT scientifically known as vaccimium myrtillus.
            BIlberry has a lot of functions, e.g; protects against liver damage,
            skin protection, diarrhea, wound healing, cardio-protective effects,
            reduction of bad cholesterol, helps against urinary tract infections
            and portects against eye disorders.
          </p>
          <p>
            GLISODIN (CANTALOUPE EXTRACT). Glisodin stimulates the body's
            antioxidant defence system. It enhances the body's producton of its
            own natural anti-oxidants. Because of this, the body is well
            equipped to recover, combat stress as well as prevent DNA damage
            induced by oxidative stress.
          </p>
          <img src="/ingredients.jpg" alt="ingredients of the stc30" />
          <p>
            BLACK CURRANT JUICE POWDER. Black currants are rich in anthocyanins,
            polyphenlic substances, antioxidants, viamic C and Gamma-Linolenic
            Acid. Black currants help in regulating blood flow, improvement of
            the immune system, ocular health, gut health and kidney health.
          </p>
          <p>
            PHYTOCELLTEC SOLAR VITIS (VITIS VINIFERA). These are extracts from
            grapes. Grapes have substantial anti-aging benefits in the peel and
            seed.
          </p>
          <p>
            PHYTOCELLTEC MALUS DOMESTICA (UTWILLER SPATLAUBER). Also known as
            the swiss apple found in the swiss alps, it is a liposomal
            prepartion of apple stem cells. This is different from other apples,
            it is sour in taste, it can renew its skin if cut and can stay upto
            six months still fresh. It has similarities to the human cells and
            has anti-aging properties.
          </p>
        </div>
      </article>
      <article className="info">
        <h2>Where is the STC30 manufactured</h2>
        <img src="/mibelle.png" alt="Mibelle biochemistry" />
        <div className="desc">
          <p>
            The STC30 is manufactured by Mibelle Bio Chemistry in Zurich
            Switzerland Laboratory that is GMP certified for liquid supplements
            and a certified member of The Natural Products Association. The
            Laboratory meets National Science Certification which conforms with
            FDA mandated Good Manufacturing Practice (GMP) Guidelines for
            dietary supplements.
          </p>
          <img src="/superlife.jpg" alt="Superlife World" />
          <p>
            And it is distributed worldwide bySuperLifeWorld based in Malaysia.
            It is approved by several international bodies worldwide and
            approved in over 90 countries in all continents.
          </p>
        </div>
      </article>
      <article className="info">
        <h2>How does the STC30 work</h2>
        <div className="desc">
          <p>
            How the adult stem cells work can be illustrated using the skin as
            an example. The skin is used because it is the ‘guidepost’ for how
            old a person is. As one gets older, the skin starts to thin and lose
            its elasticity. It is the loss of this elasticity that causes it to
            wrinkle and sag. Normally, the skin consistently renews itself,
            shedding old cells as new cells are created underneath. The birth of
            these new skin cells is caused by the activities of the adult stem
            cells.
          </p>
          <p>
            As one ages, the adult stem cells decrease in number and gradually
            become dysfunctional. If one is able to keep the regeneration of
            skin tissue at more youthful levels by the addition of adult stem
            cells, He/she would be able to maintain a youthful-looking skin for
            a longer period of time. Practical and experimental evidence exist
            to show that the repair of organs can be achieved with this
            technology. However, whether this same technology can be used to
            stop general aging is yet to be ascertained. Stem cells have the
            ability to replicate more cells, replace damaged cells and feed
            other cells
          </p>
          <img src="/s.png" alt="how the stc30 work" />
          <p>
            When the STC30 goes into the body, it triggers production of stem
            cells in the body. These stem cells then detect where there is need
            for them, where there is an abnormal health condition or
            disfunctioning of the cells and fix it while also rejuvenating and
            regenerating the tissues and organs involved hence facilitating
            healing.
          </p>
        </div>
      </article>
      <article className="info">
        <h2>What is the function of the STC30</h2>
        <div className="desc">
          <p>
            First of all, the STC30 boosts your <strong>immune system</strong>.
            The immune system shields the body from diseases and disorders by
            creating a barrier that prevents body invaders or antigens from
            going into it and incase they slip and enter, the immune system
            produces white blood cells and other chemicals and proteins that
            attack and destroy substances foreign to the body.
          </p>
          <p>
            The STC30 <strong>detoxifies the body.</strong> It removes toxic
            substances from the body, flushing out bad blood, water and other
            substances leaving your body system clean.
          </p>
          <p>
            The STC30 <strong>rejuvenates the body.</strong> It gives you a new
            feel, a new strength and vigor restoring your youth and making you
            more energetic.
          </p>
          <p>
            It
            <strong>
              nourishes and regenerates cells and repairs damaged ones.
            </strong>
          </p>
          <p>
            The STC30 also
            <strong>
              regenerates and repair damaged body tissues and organs
            </strong>
            . Since cells are the building blocks of the body, stem cells
            recieve signals from the brain and go to damaged cells, tissues or
            organs and start rebuilding them.
          </p>
          <img src="/benefits.jpg" alt="benefits of stc30" />
          <p>
            Have you ever been diagonised with or have a relative or friend
            battling with autism, diabetes, cancer, asthma, stroke, migraines,
            fibroids, low and weak sexual feel, high blood pressure, ulcers,
            goitre, back pain, sickle cells?. Search no more. The STC30 brings a
            complete healing formula that heals from the root cause, the
            cellular level with no side effects unlike the conventional medicine
            which usually treat symptoms without eradicating the cause{" "}
          </p>
        </div>
      </article>
      <article className="info">
        <h2>The healing process of the STC30</h2>
        <div className="desc">
          <p>
            STC30 goes through the nerves, travel to the brain and provide a
            signal where there is need to repair and regenerate cells. The time
            taken to see results varies from patient to patient. Some bodies
            respond faster to the therapy than others and the longer the patient
            has suffered from the disease the longer the time required to heal
            completely. The time for healing ranges from one dose (30 days) to
            six months (six doses). A dose of the STC30 is of 2 boxes, each box
            contains 15 sachets into which the STC30 is prepared in powder form.
          </p>
          <img src="/sample.jpg" alt="sachets of the stc30" />
          <p>
            Medical experts also recommend that one should take atleast a dose
            of the STC30 in every two years to keep and maintain their health at
            an optimum level.{" "}
          </p>
        </div>
      </article>
      <article className="info">
        <h2>How to administer the STC30</h2>
        <div className="desc">
          <p>
            Keep dosage to one sachet a day. If you have a severe condition you
            can increase to 2 sachets a day, taking one in the morning and one
            in the night. If you are pregnant or nursing, please talk tou your
            physician. Children can take the STC30 but with adult supervision.
            The SuperLife STC30 is 100% Natural 100% NO SIDE EFFECTS, NO
            OVERDOSE.
          </p>
          <img src="/intake.jpg" alt="administering the stc30" />
        </div>
        <p>
          It is best taken before breakfast. Tear and open the sachet gently.
          Raise the tongue to hit the roof of the mouth. Pour content of the
          sachet under tongue and allow it to dissolve. Do not swallow and drink
          lots of water.
        </p>
        <p>
          The STC30 is 100% non toxic, all natural, 100% Halal, FDA registered,
          100% no side effects, no overdose with $1,000,000 product liability.
          Since 2015, it has been proven in more than 120 countries, in Europe,
          Asia, Latin and North America plus Africa.
        </p>
      </article>

      <article className="info">
        <h2>The price of the STC30</h2>
        <div className="desc">
          <p>
            Life is precious but also priceless and you cannot have a good minus
            a good health. SuperLife STC30 ensures to give you a good health at
            the lowest cost possible relative to its immense power and other
            medications on the market and so do not give it a second thought.
          </p>
          <p>
            One pack of the STC30 is $70 / 300,000 UgShs plus delivery costs.
            The delivery costs depend on the region you are in. Nothing is more
            valuable than your health. It is the most expensive asset you have
            and the STC30 is here for you.
          </p>
          <p>The STC30 can reach you wherever you are.</p>
        </div>
      </article>
      <article className="info">
        <h2>Frequently asked questions</h2>
        <div className="desc">
          <Questions />
        </div>
      </article>
    </section>
    <Link to="/testimonies" className="testimony-link">
      Testimonies
    </Link>
  </Layout>
)

export default IndexPage
