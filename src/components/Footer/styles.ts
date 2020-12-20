import styled from 'styled-components'


export const Foot = styled.footer`
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