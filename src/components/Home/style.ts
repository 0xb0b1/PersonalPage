import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.section`
  /* Home */
  font-family: "Exo 2", sans-serif;
  display: flex;
  color: white;
  background-color: rgb(29, 27, 27);
  height: 100%;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const Container = styled(motion.div)`
  width: 50vw;
  height: 100%;
  flex-direction: column;
  display: flex;
  padding: 1.8rem;
  margin-top: 3rem;
  justify-content: center;

  .main-content {
    font-size: 3rem;
  }

  .skill-content {
    margin: 0.6rem 0;
    color: #9c72be;
    font-family: "Varela Round", sans-serif;

    font-weight: 400;
    font-size: 1.6rem;
  }

  .skill-animation {
    height: 60px;
    width: 100%;
    margin: 1rem 0;
  }

  .hand {
    display: inline-block;
    margin: 0.9rem;
    cursor: pointer;
  }

  .welcome-content {
    color: gray;
  }
`;

export const Svg = styled(motion.div)`
  width: 100%;
  height: 100%;

  .svg-container {
    margin-top: 1rem;
    width: 20vw;
    height: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
