import React, { useEffect } from 'react'
import { Hero, Album, Featured, Reviews, Facts } from '../components'
import styled from 'styled-components'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper className='section-center'>
      <Hero />
      <Album />
      <Featured />
      <Reviews />
      <Facts />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border: 1px solid var(--light-color-lighter);
  padding: 0.25rem;
`

export default Home
