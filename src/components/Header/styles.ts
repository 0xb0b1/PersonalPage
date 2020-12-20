import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export const Head = styled(motion.nav)`
  position: fixed;
  z-index: 1;
  display: flex;
  top: 0;
  background: #fff;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 6vh;
`

export const Logo = styled.span`
  font-family: "Acme", sans-serif;
  font-size: 1.5rem;
  color: #55198b;
  cursor: pointer;
  width: 50%;
`

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  top: 0;
  background: rgba(255, 255, 255, 0.911);
  left: 0;
  opacity: 1;
  transition: all 0.5s ease;
  z-index: 1;

  li {
    list-style-type: none;
    float: left;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  margin: 0.4rem;
  cursor: pointer;

  &:hover {
    color: #55198b;
  }

  &.active {
    color: white;
    font-weight: 800;
    border: none;
    background: rgba(0, 0, 0, 0.534);
  }
`