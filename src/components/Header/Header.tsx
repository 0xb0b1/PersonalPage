import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

// styles
import { Head, Navbar , StyledLink , Logo } from './styles'


const Header: React.FC = () => {
  return (
    <Head>
      <Logo onClick={() => scroll.scrollToTop()}>
        &lt; Paulo-Vicente/&gt;
      </Logo>

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
            to="about"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >About
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