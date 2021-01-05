import styled from 'styled-components'
import { motion } from 'framer-motion'

export const contentVariants = {
  initial: {
    translateY: "100vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
}

export const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
}

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
  padding-top: 5rem;
  width: 100vw;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 4vw;

  .main-content {
    font-size: 2rem;
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
    font-size: 1.8rem;
  }

  .welcome-content {
    color: gray;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 1000px) {
    .main-content {
      font-size: 3rem;
    }
  }
`;

export const Svg = styled(motion.div)`
  width: 100%;
  height: 60%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .svg-container {
    margin-top: 1.5rem;
    width: 50vw;
    height: 36rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
