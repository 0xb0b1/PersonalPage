import React, { useState } from 'react'
import { animateScroll as scroll, Link } from 'react-scroll'

// styles
import { Head } from './styles'


const Header: React.FC = () => {

  const [navbar, setNavbar] = useState(false)
  const [navClicked, setNavClicked] = useState(false)

  const handleClick= () => {
    setNavClicked(!navClicked)
  }

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNav)
  
  return (
    <Head>
      <span className="logo" onClick={() => scroll.scrollToTop()}>
        &lt; Paulo-Vicente/&gt;
      </span>
      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={handleClick}>
        <i className={navClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      {/* // */}
    </Head>
  )
}

export default Header