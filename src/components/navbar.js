import React, { useState } from "react"
import { Link } from "gatsby"

function Navbar() {
  const [showOrder, setShowOrder] = useState(false)
  return (
    <nav>
      <div className="head">
        <div className="title">
          <Link to="/">stem cell therapy stc30</Link>
        </div>
        <div className="links">
          <button onClick={() => setShowOrder(!showOrder)}>
            {showOrder ? "close" : "make an order"}
          </button>
        </div>
      </div>
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
    </nav>
  )
}

export default Navbar
