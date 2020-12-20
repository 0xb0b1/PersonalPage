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
  width: 100%;
`

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  opacity: 1;
  transition: all 0.5s ease;
  z-index: 1;
  margin-left: 50vw;

  li {
    list-style-type: none;
    float: left;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  margin: 0.4rem;
  cursor: pointer;
  margin-left: 90px;

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

export const Logo = styled.span`
  top: 2vh;
  position: absolute;
  font-size: 1.8rem;
  color: #55198b;
  cursor: pointer;
`;