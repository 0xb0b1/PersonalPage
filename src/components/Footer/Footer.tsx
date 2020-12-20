import React from 'react'

import { Foot } from './styles'

const Footer: React.FC = () => {
  return (
    <Foot>
      <div>
        &copy; {new Date().getFullYear()} Paulo Vicente
      <br />
      Built with ReactJS/TypeScript/StyledComponents
      </div>
    </Foot>
  )
}

export default Footer