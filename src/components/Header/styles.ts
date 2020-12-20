import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Head = styled(motion.nav)`
  position: fixed;
  z-index: 1;
  display: flex;
  background: #fff;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  height: 5vh;

  .logo {
    font-family: "Acme", sans-serif;
    font-size: 1.8rem;
    color: #55198b;
    cursor: pointer;
  }

  .menu-icon {
    display: none;
  }
`;

