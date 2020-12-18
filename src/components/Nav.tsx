import React, { useState } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

import { Container, Logo } from './styles';

const Nav: React.FC = () => {

  const [navbar, setNavbar] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const handleClick = () => {
    setNavClicked(!navClicked);
  }

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeNav);

  return (
    <Container>
      <Logo onClick={() => scroll.scrollToTop()}>
        &lt; Paulo-Vicente/&gt;
      </Logo>
    </Container>
  )
}
 

export default Nav;