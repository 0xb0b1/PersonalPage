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
  justify-content: space-between;
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
  flex-direction: row;
  top: 0;
  position: fixed;
  opacity: 1;
  transition: all 0.5s ease;

  li {
    list-style-type: none;
    float: left;
  }
`

export const StyledLink = styled(Link)`
  display: block;
  line-height: 9.1vh;
  width: 100vw;
  margin: 0.4rem;

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