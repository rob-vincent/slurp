import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'
import styled from 'styled-components'

const StarRating = ({ rating }) => {
  return (
    <Wrapper rating={rating}>
      {rating} {'     '}
      <div className='stars'>
        <BsStar />
        <BsStar />
        <BsStar />
        <BsStar />
        <BsStar />
        <div className='outside'>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .stars {
    position: relative;
    display: inline-block;
    color: var(--dark-color-lighter);
  }
  .outside {
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    top: 0;
    width: ${(props) => (props.rating / 5) * 100}%;
    color: var(--warning-color);
    z-index: -1;
  }
`

export default StarRating
