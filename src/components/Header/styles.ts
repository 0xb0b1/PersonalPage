import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Head = styled(motion.div)`
  /* Nav */
  .nav-container {
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    background: #fff;
    flex-direction: row;
    padding: 1.2rem;
    align-items: center;
    box-shadow: 2px 2px 4px gray;
    justify-content: space-between;
    width: 100%;
    height: 9vh;
  }

  .nav-container.active {
    background: fff;
    height: 9vh;
    border-radius: 2px;
  }

  .logo {
    font-family: "Acme", sans-serif;
    font-size: 1.8rem;
    color: #55198b;
    cursor: pointer;
  }

  .link {
    list-style-type: none;
    float: left;
  }

  .nav-links .anchor {
    display: inline-block;
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-family: "Varela Round", sans-serif;

    font-size: 1rem;
    font-weight: 400;
    line-height: 9.1vh;
    margin: 0.8rem;
  }

  .nav-links .anchor:hover {
    color: #55198b;
  }

  .anchor.active {
    color: #55198b;
    font-weight: 800;
    border-bottom: 2px solid #55198b;
  }

  .menu-icon {
    display: none;
  }
`;

