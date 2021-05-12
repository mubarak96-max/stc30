import React, { useState } from "react"
import BackToTop from "react-back-to-top-button"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
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
