import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Product from './Product'

const ProductsContainer = ({ products, filteredProducts = [], filter }) => {
  let tempProducts = filter ? products.filter((product) => product[filter]) : filteredProducts
  return (
    <Wrapper filter={filter}>
      {tempProducts.map((product) => {
        return <Product {...product} key={product.id} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }
  @media (max-width: 620px) {
    grid-auto-rows: auto;
  }
  @media (max-width: 320px) {
    grid-auto-rows: 275px;
    grid-template-columns: repeat(1, 1fr);
  }
`

const mapStateToProps = (store) => {
  const { products, filteredProducts } = store
  return { products, filteredProducts }
}

export default connect(mapStateToProps)(ProductsContainer)
