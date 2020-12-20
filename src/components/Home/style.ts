import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.section`
  /* Home */
  font-family: "Varela Round", sans-serif;
  display: flex;
  color: white;
  flex-direction: row;
  background-color: rgb(29, 27, 27);
  height: 100%;
  padding: 1rem;
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
  .svg-container {
    margin-top: 1.5rem;
    width: 50vw;
    height: 36rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .svg {
    height: 75%;
  }
`
export const Button = styled.button`
  background-color: #55198b;
  border: 1px solid #55198b;
  color: #fff;

  font-weight: 700;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  padding: 13px 22px;
  text-transform: uppercase;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  display: block;
  outline: none;
  margin-top: 3.6rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    background-color: #fff;
    color: #55198b;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
  }
`