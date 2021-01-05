import styled from "styled-components";

export const Section = styled.section`

  font-family: "Exo 2", sans-serif;
  display: flex;
  color: rgb(0, 0, 0);
  font-size: 1.3rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  .skills-container h1 {
    margin: 2rem 0;
  }

  .heading {
    margin: 2rem 0;
    font-family: "Varela Round", sans-serif;
    color: black;
  }
`

export const Techs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* background: #e7dddd5c; */

  box-shadow: 3px 2px 10px gray;
  min-height: 12rem;
  border-radius: 20px;
  padding: 3rem;
  flex-wrap: wrap;
  margin: 2rem;
  text-align: center;

  &:hover {
    border: 1px solid gray;
  }

  i {
    margin: 1.1rem;
    font-size: 4.8rem;
  }

  li {
    list-style-type: none;
    font-family: "Varela Round", sans-serif;
    font-size: 1rem;
    font-weight: 700;
  }

  .html {
    color: rgb(204 78 29);
  }

  .css {
    color: #5898dc;
  }

  .javascript {
    color: #ecec1c;
  }

  .react {
    color: #29c2ff;
  }
`
