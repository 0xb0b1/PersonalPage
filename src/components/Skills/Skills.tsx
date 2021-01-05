import React from "react"

// styles 
import { Section , Techs } from './styles'

const Skills = () => {
  return (
    <Section >
      <h1 className="heading">Technology I work with ?</h1>

      <Techs className="techs">
        <li>
          <i className="fab html fa-html5"></i> <p>HTML5</p>
        </li>
        <li>
          <i className="fab css fa-css3"></i>
          <p>CSS3</p>
        </li>
        <li>
          <i className="fab javascript fa-js"></i>
          <p>Javascript</p>
        </li>
        <li>
          <i className="fab typescript fa-react"></i>
          <p>Typescript</p>
        </li>
        <li>
          <i className="fab react fa-react"></i>
          <p>React</p>
        </li>
        <li>
          <i className="fab git fa-git"></i>
          <p>Git</p>
        </li>
        <li>
          <i className="fab github fa-github"></i>
          <p>Github</p>
        </li>
      </Techs>
    </Section>
  )
}

export default Skills