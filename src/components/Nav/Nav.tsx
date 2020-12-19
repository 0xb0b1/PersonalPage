import React, { useState } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

import { Container, Logo, ListItem, MenuIcon } from './styles';


const Nav: React.FC = () => {

  const [navbar, setNavbar] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const handleClick = () => {
    setNavClicked(!navClicked);
  };

  const changeNav = () => {
    if (window.scrollY <= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const navClass = navbar ? "anchor is-active" : "anchor";
  const navIconClass = navClicked ? "fas fa-times": "fas fa-bas";

  return (
    <Container>
      <Logo onClick={() => scroll.scrollToTop()}>
        &lt;Paulo-Vicente/&gt;
      </Logo>

      <MenuIcon onClick={handleClick}>
        <i className={navIconClass}></i>
      </MenuIcon>

      <ListItem>
        <li>
          <Link className={navClass}
            activeClass="active" to="home" spy={true} smooth={true} delay={100} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className="anchor" 
            activeClass="active" to="services" spy={true} smooth={true} delay={100} offset={0} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link className="anchor" 
            activeClass="active" to="skills" spy={true} smooth={true} delay={100} offset={0} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="anchor" 
            activeClass="active" to="contact" delay={100} spy={true} smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </li>
      </ListItem>
    </Container>
  )
}


export default Nav;