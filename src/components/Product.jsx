import React from 'react'
import styled from 'styled-components'
import StarRating from './StarRating'
import { connect } from 'react-redux'

const Product = ({ name, url, stars, price, size }) => {
  return (
    <Wrapper size={size}>
      <img src={url} alt={name} />
      <div className='info'>
        <h5>{name}</h5>
        <h5>
          <span>{price[size]}php</span>{' '}
          <span style={{ background: 'var(--dark-color)', textTransform: 'capitalize' }}>{size.substring(0, 1)}</span>
        </h5>
        <h5>
          <StarRating rating={stars} />
        </h5>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid var(--dark-color-lighter);
  img {
    height: 70%;
    width: 100%;
    object-fit: cover;
  }
  .info {
    padding-left: 0.25rem;
  }
  h5 {
    padding: 0.25rem 0.1rem;
    span {
      padding: 0.1rem 0.25rem;
      background: ${(props) => {
        if (props.size === 'small') return 'var(--primary-color)'
        if (props.size === 'medium') return 'var(--danger-color)'
        if (props.size === 'large') return 'var(--secondary-color)'
      }};
      color: var(--light-color);
      border-radius: 3px;
    }
  }
  @media (max-width: 820px) {
    border: none;
    display: flex;
    align-items: center;
    background: var(--light-color-lighter);
    z-index: -2;
    img {
      width: 140px;
      height: 140px;
    }
    img {
      padding-left: 0.25rem;
    }
  }
  @media (max-width: 620px) {
    display: inherit;
    img {
      padding-left: 0;
      width: 70%;
      margin: 0.5rem auto;
    }
    h5 {
      text-align: center;
    }
  }
`

const mapStateToProps = (store) => {
  const { size } = store.filter
  return { size }
}

export default connect(mapStateToProps)(Product)
