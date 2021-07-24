import React from 'react'
import ProductsContainer from './ProductsContainer'
import Title from './Title'

const Featured = () => {
  return (
    <Title title='Featured Flavors'>
      <ProductsContainer filter='featured' />
    </Title>
  )
}

export default Featured
