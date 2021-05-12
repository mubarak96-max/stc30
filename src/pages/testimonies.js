import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Testimonies = () => {
  return (
    <Layout>
    <SEO title='Testimonies'/>
      <section className="testimonies">
        <Link to="/" className="back-home">
          Back Home
        </Link>
        <img src="/testimonies/t1.jpg" alt="testimony of stc30" />
        <iframe
          width="320"
          height="315"
          src="https://www.youtube.com/embed/BH3Ku7cFm3M"
        ></iframe>
        <img src="/testimonies/t9.jpg" alt="testimony of stc30" />
        <iframe
          width="320"
          height="315"
          src="https://www.youtube.com/embed/oDyLxKlbUSg"
        ></iframe>
        <img src="/testimonies/t4.jpeg" alt="testimony of stc30" />
        <iframe
          width="320"
          height="315"
          src="https://www.youtube.com/embed/XoLszy8OzSw"
        ></iframe>
        <img src="/testimonies/t12.jpg" alt="testimony of stc30" />
        <img src="/testimonies/t13.jpg" alt="testimony of stc30" />
        <iframe
          width="320"
          height="315"
          src="https://www.youtube.com/embed/wOv6IVVrSyc"
        ></iframe>
        <img src="/testimonies/t18.jpg" alt="testimony of stc30" />
        <iframe
          width="320"
          height="315"
          src="https://www.youtube.com/embed/7WugyNMk1Kk"
        ></iframe>
        <iframe
          width="320"
          height="315"
          src="https://www.youtube.com/embed/9xWec8yijxM"
        ></iframe>

        <img src="/testimonies/t2.jpg" alt="testimony of stc30" />
        <img src="/testimonies/t3.jpg" alt="testimony of stc30" />

        <img src="/testimonies/t5.jpg" alt="testimony of stc30" />
        <img src="/testimonies/t6.jpg" alt="testimony of stc30" />
        <img src="/testimonies/t7.jpeg" alt="testimony of stc30" />
        <img src="/testimonies/t8.jpg" alt="testimony of stc30" />

        <img src="/testimonies/t10.jpeg" alt="testimony of stc30" />
        <img src="/testimonies/t11.jpg" alt="testimony of stc30" />
        <img src="/testimonies/t14.jpg" alt="testimony of stc30" />
        <img src="/testimonies/t15.jpg" alt="testimony of stc30" />
        <img src="/testimonies/t16.jpg" alt="testimony of stc30" />

        <img src="/testimonies/t19.jpg" alt="testimony of stc30" />
        <img src="/testimonies/t20.jpg" alt="testimony of stc30" />
      </section>
    </Layout>
  )
}

export default Testimonies
