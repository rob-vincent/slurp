import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Filter, MenuContainer, Notice } from '../components'

const Menu = ({ products }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper className='section-center'>
      <Notice />
      <div className='content'>
        <Filter />
        {products.length === 0 ? <h2>Sorry, no product to show...</h2> : <MenuContainer />}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .content {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 200px 1fr;
    h2 {
      text-align: center;
    }
  }
  @media (max-width: 960px) {
    .content {
      grid-template-columns: 1fr;
    }
  }
`

const mapStateToProps = (state) => {
  const { filteredProducts: products } = state
  return { products }
}

export default connect(mapStateToProps)(Menu)
