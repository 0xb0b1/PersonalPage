import React, { useState } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

import { Container, Logo, ListItem } from './styles';

const Nav: React.FC = () => {

  return (
    <Container>
      <Logo onClick={() => scroll.scrollToTop()}>
        &lt;Paulo-Vicente/&gt;
      </Logo>
      <ListItem>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
            >Home</Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >Services</Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >Skills</Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="contact"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Contact</Link>
        </li>
      </ListItem>
    </Container>
  )
}
 

export default Nav;