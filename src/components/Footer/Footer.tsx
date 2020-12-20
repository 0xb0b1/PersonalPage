import React from 'react'

import { Foot } from './styles'

const Footer = () => (
  <Foot>
    <div>
      &copy; {new Date().getFullYear()} Paulo Vicente
      <br />
      Built with ReactJS/TypeScript/StyledComponents
    </div>
    <nav>
      <ul data-testid="footer-menu">
        <li data-tesid="github">
          <a
          href="https://github.com/0xb0b1"
          target="_blank"
          rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li data-testid="twitter">
          <a 
          href="https://twitter.com/p_vcent"
          target="_blank"
          rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </nav>
  </Foot>
)

export default Footer