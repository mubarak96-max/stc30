import React, { useState } from "react"
import { Link } from "gatsby"
import {
  FaWhatsapp,
  FaCartPlus,
  FaEnvelope,
  FaPhone,
  FaTimes,
} from "react-icons/fa"

function Navbar() {
  const [showOrder, setShowOrder] = useState(false)
  const [showInquiry, setShowInquiry] = useState(false)
  return (
    <>
      <nav>
        <section className="order-links">
          <div className="order-link orange">
            <button className="order-btn" onClick={() => setShowOrder(true)}>
              <FaCartPlus size={23} />
              order now
            </button>
          </div>
          <div className="order-link green">
            <a href="https://api.whatsapp.com/send?phone=+256770441205">
              <FaWhatsapp size={23} />
              order via whatsapp
            </a>
          </div>
          <div className="order-link light-blue">
            <a href="tel:256759984846">
              <FaPhone size={23} />
              order via call
            </a>
          </div>
          <div className="order-link black">
            <button
              className="inquiry-btn"
              onClick={() => setShowInquiry(true)}
            >
              <FaEnvelope size={23} />
              submit an inquiry
            </button>
          </div>
        </section>
        <div className="nav-header">
          <div className="head">
            <div className="title">
              <h1>stem cell therapy stc30</h1>
            </div>
          </div>
        </div>
        <div className={`${showOrder ? "order" : "hide-order"}`}>
          <button className="close" onClick={() => setShowOrder(false)}>
            <FaTimes />
          </button>

          <form action="https://formspree.io/f/xnqlayka" method="POST">
            <span>Place your order</span>
            <input type="text" name="name" placeholder="Names" required />
            <input type="text" name="_replyto" placeholder="E-Mail" />
            <input type="text" name="contact" placeholder="WhatsApp Contact" />
            <input type="text" name="country" placeholder="Country" required />
            <input type="number" name="amount" placeholder="Boxes required" />
            <button>Send</button>
          </form>
        </div>
        {/* ............inquiry form.................. */}
        <div className={`${showInquiry ? "inquiry" : "hide-inquiry"}`}>
          <button className="close" onClick={() => setShowInquiry(false)}>
            <FaTimes />
          </button>

          <form action="https://formspree.io/f/xnqlayka" method="POST">
            <span>Make an inquiry</span>
            <input type="text" name="name" placeholder="Names" required />
            <input type="text" name="_replyto" placeholder="E-Mail" />
            <input type="text" name="contact" placeholder="WhatsApp Contact" />
            <input type="text" name="country" placeholder="Country" required />
            <textarea type="text" name="inquiry" cols="30" rows="10"></textarea>
            <button>Send</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar
