import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu'

const Foot = styled.footer`
  padding: 0 3% 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media print {
    display: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const Footer = () => (
  <Foot>
    <div>
      &copy; {new Date().getFullYear()} Paulo Vicente
      <br />
      Built with ReactJS/TypeScript/StyledComponents
    </div>

    <nav>
      <Menu data-testid="footer-menu">
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
      </Menu>
    </nav>
  </Foot>
)
