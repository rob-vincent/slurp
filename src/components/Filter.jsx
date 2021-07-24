import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { categorizeProducts } from '../reducer/helper'
import { motion, AnimateSharedLayout } from 'framer-motion'

const Filter = ({ products, stars, bestseller, size, newProduct, category, dispatch }) => {
  const categories = categorizeProducts(products, 'category')

  const updateFilter = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'size') value = e.target.dataset.size
    if (name === 'bestseller' || name === 'newProduct') value = e.target.checked
    dispatch({ type: 'UPDATE_FILTER', payload: { name, value } })
  }

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS', payload: products })
  }, [stars, bestseller, size, newProduct, category])

  return (
    <Wrapper>
      <h3>Filter</h3>
      <hr />
      <div className='filters'>
        {/* category section */}
        <select value={category} name='category' onChange={updateFilter}>
          {categories.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            )
          })}
        </select>
        {/* size section */}
        <div className='size'>
          <AnimateSharedLayout>
            {['small', 'medium', 'large'].map((item) => {
              return (
                <button type='button' key={item} name='size' data-size={item} onClick={updateFilter}>
                  {item.substring(0, 1).toUpperCase()}
                  {item === size && <motion.div className='bg' layoutId='bg'></motion.div>}
                </button>
              )
            })}
          </AnimateSharedLayout>
        </div>
        {/* new product section */}
        <div className='newProduct'>
          <input type='checkbox' id='newProduct' name='newProduct' checked={newProduct} onChange={updateFilter} />
          <label htmlFor='newProduct'> New product</label>
        </div>
        {/* bestseller section */}
        <div className='bestseller'>
          <input type='checkbox' id='bestseller' name='bestseller' checked={bestseller} onChange={updateFilter} />
          <label htmlFor='bestseller'> Best seller</label>
        </div>
        <div className='stars'>
          <h5>Stars: {stars}</h5>
          <input type='range' name='stars' id='stars' min='3' max='5' step='.1' value={stars} onChange={updateFilter} />
        </div>
      </div>
      <button type='button' className='clearBtn' onClick={() => dispatch({ type: 'CLEAR_FILTER' })}>
        Clear filter
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: sticky;
  top: 4rem;
  width: 200px;
  height: 18.5rem;
  padding: 0.5rem;
  border: 1px solid var(--secondary-color);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  h3 {
    margin: 0.25rem 0;
  }
  select {
    margin: 1rem 0 0.25rem 0;
    width: 100px;
    padding: 0.25rem;
    border: 1px solid var(--dark-color-lighter);
    border-radius: 0.25rem;
    option {
      letter-spacing: 0.25rem;
    }
  }
  .size {
    margin: 0.65rem 0;
    button {
      padding: 0.25rem;
      margin: 0.25rem;
      position: relative;
      cursor: pointer;
      background: transparent;
      border: none;
      div {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--success-color);
        border-radius: 0.25rem;
        z-index: -1;
      }
    }
  }
  .newProduct,
  .bestseller {
    margin: 1rem 0;
  }
  input[type='range'] {
    width: 100%;
  }
  .clearBtn {
    cursor: pointer;
    margin-top: 0.5rem;
    padding: 0.15rem 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    background: var(--dark-color-lighter);
    color: var(--light-color);
    transition: all 0.2s ease-in-out;
    :hover {
      background: var(--dark-color);
    }
  }
  @media (max-width: 960px) {
    position: inherit;
  }
`

const mapStateToProps = (store) => {
  const {
    products,
    filter: { size, category, bestseller, newProduct, stars },
  } = store
  return { products, size, bestseller, newProduct, category, stars }
}

export default connect(mapStateToProps)(Filter)
