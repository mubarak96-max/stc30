import React from "react"
import { Link } from "gatsby"
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa"

function Footer({ setShowOrder }) {
  return (
    <footer>
      <div className="partner-icons">
        <img src="/dhl.png" alt="dhl" />
        <img src="/plt.png" alt="PLT" />
        <img src="/halal.jpg" alt="STC30 Halal" />
      </div>
      <div className="social-media">
        <a
          href="https://api.whatsapp.com/send?phone=256770441205"
          className="whatsapp"
          target="_blank"
        >
          <FaWhatsappSquare color="black" size={35} />
        </a>
        <a
          href="https://www.facebook.com/stemcellzstc30"
          className="facebook"
          target="_blank"
        >
          <FaFacebookSquare color="black" size={35} />
        </a>
      </div>
      <a
        href="https://superlifeworld.com"
        className="official-site"
        target="_blank"
      >
        SuperLife World
      </a>
    </footer>
  )
}

export default Footer
