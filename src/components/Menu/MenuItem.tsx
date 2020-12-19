import * as React from 'react'
import camelCase from 'camelcase'
import styled from 'styled-components'
import { motion } from 'framer-motion'


interface IProps {
  item: {
    title: string
    url: string
    id?: number | string
  }

  toggle: () => void
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      y: { stiffness: 1000, valocity: -100 },
    },
  },
  close: {
    y: 50,
    opacity: 0,
    pointerEvents: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const StyledLink = styled(Link)`
  color: ${getBackground}
`

const Item = styled = styled(motion.li).attrs(() => ({
  initial: 'closed',
  variants,
}))`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor-pointer;
  font-size: 1.5rem;
`

export const MenuItem = ({ item: { title, url }, toggle }: IProps) => (
  <Item
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTa={{ scale: 0.95 }}
    data-testid={camelCase(title)}
  >
    <StyledLink to={url} onClick={toggle}>
      {title}
    </StyledLink>
  </Item>
)
