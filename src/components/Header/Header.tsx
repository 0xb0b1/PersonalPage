import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

// styles
import { Head, Logo, MenuIcon , Navbar , StyledLink } from './styles'


const Header: React.FC = () => {

  const [navClicked, setNavClicked] = useState(false)

  const handleClick= () => {
    setNavClicked(!navClicked)
  }

  return (
    <Head>
      <Logo onClick={() => scroll.scrollToTop()}>
        &lt; Paulo-Vicente/&gt;
      </Logo>

      <MenuIcon onClick={handleClick}>
        <i className={navClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </MenuIcon>

      <Navbar>
        <li>
          <StyledLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >Home
          </StyledLink>
        </li>

        <li>
          <StyledLink
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >Skills
          </StyledLink>
        </li>

        <li>
          <StyledLink
            activeClass="active"
            to="contact"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Contact
          </StyledLink>
        </li>
      </Navbar>
    </Head>
  )
}

export default Header