import React from 'react'
import styled from 'styled-components'
import ProductsContainer from './ProductsContainer'

const MenuContainer = () => {
  return (
    <Wrapper>
      <ProductsContainer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1.5rem 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid var(--dark-color-lighter);
`

export default MenuContainer
