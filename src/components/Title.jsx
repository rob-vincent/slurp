import React from 'react'
import styled from 'styled-components'

const Title = ({ title, children }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  h1 {
    font-size: 2rem;
    display: inline-block;
    margin: 1.5rem 0;
    padding: 0.5rem 3rem 0.5rem 0.5rem;
    color: var(--light-color);
    background: var(--primary-color);
  }
  @media (max-width: 820px) {
    padding: 1rem 0;
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 320px) {
    padding: 1rem;
    h1 {
      font-size: 1.35rem;
    }
  }
`

export default Title
