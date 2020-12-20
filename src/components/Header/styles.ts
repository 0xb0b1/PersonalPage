import styled from 'styled-components'

export const Head = styled.header`
  padding: 1rem 3%;
  display: flex;
  justify-content: center;

  h1 {
    margin: 0;
    line-height: 1;

    @media screen and (max-width: 375px) {
      font-size: 1.25rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.75rem;
    }

    @media print {
      display: none;
    }
  }
`

export const Nav = styled.nav`
  list-type: none;
`