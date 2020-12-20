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

  .techs {
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
  }

  .heading {
    margin: 2rem 0;
    font-family: "Varela Round", sans-serif;
    color: black;
  }

  .techs:hover {
    border: 1px solid gray;
  }

  .techs i {
    margin: 1.1rem;
    font-size: 4.8rem;
  }

  .techs li {
    list-style-type: none;
    font-family: "Varela Round", sans-serif;
    font-size: 1rem;
    font-weight: 700;
  }

  .techs .html {
    color: rgb(204 78 29);
  }

  .techs .css {
    color: #5898dc;
  }

  .techs .javascript {
    color: #ecec1c;
  }

  .techs .react {
    color: #29c2ff;
  }
`;
