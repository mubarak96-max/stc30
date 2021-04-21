import React, { useState } from "react"
import BackToTop from "react-back-to-top-button"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const [showOrder, setShowOrder] = useState(false)
  return (
    <main>
      <Navbar />
      <button className="order-btn" onClick={() => setShowOrder(!showOrder)}>
        {showOrder ? "close" : "make an order"}
      </button>
      <div className={`${showOrder ? "order" : "hide-order"}`}>
        <form action="https://formspree.io/f/xnqlayka" method="POST">
          <input type="text" name="name" placeholder="Names" required />
          <input type="text" name="_replyto" placeholder="E-Mail" />
          <input type="text" name="contact" placeholder="WhatsApp Contact" />
          <input type="text" name="country" placeholder="Country" required />
          <input type="number" name="amount" placeholder="Boxes required" />
          <button>Send</button>
        </form>
      </div>
      <BackToTop
        showOnScrollUp
        showAt={20}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>back to top</span>
      </BackToTop>
      {children}
      <Footer />
    </main>
  )
}

export default Layout
