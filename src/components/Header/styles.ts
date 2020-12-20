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
`;

export const MenuIcon = styled.div`
  display: none;
`
export const Navbar = styled.ul`
  background: fff;
  height: 9vh;
  border-radius: 2px;

  li {
    list-style-type: none;
    float: left;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-family: "Exo 2", sans-serif;

  font-size: 1rem;
  font-weight: 400;
  line-height: 9.1vh;
  margin: 0.8rem;

  &:hover {
    color: #55198b;
  }

  &.active {
    color: #55198b;
    font-weight: 800;
    border-bottom: 2px solid #55198b;
  }
`