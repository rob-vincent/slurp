import React from 'react'
import styled, { keyframes } from 'styled-components'

const Review = ({ name, job, image, review, position }) => {
  return (
    <Wrapper position={position}>
      <img src={image} alt='some person' />
      <h4>{name}</h4>
      <h5>{job}</h5>
      <blockquote>"{review}"</blockquote>
    </Wrapper>
  )
}

const fadeIn = keyframes`
     0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  position: relative;
  display: ${(props) => (props.position === 'show' ? 'inherit' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 17rem;
  margin: 1rem 0;
  padding: 1rem 0;
  text-align: center;
  animation: ${fadeIn} 0.75s linear;
  h4,
  h5 {
    margin: 0.35rem;
    color: var(--dark-color-lighter);
  }
  img {
    display: block;
    margin: 0 auto;
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
    padding: 0.25rem;
    border: 0.25rem solid var(--dark-color-lighter);
    object-fit: cover;
  }
  blockquote {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  @media (max-width: 820px) {
    blockquote {
      font-size: 1.15rem;
      padding: 1rem;
    }
  }
  @media (max-width: 460px) {
    height: 15rem;
    blockquote {
      font-size: 1rem;
      padding: 0.25rem;
    }
  }
`

export default Review
