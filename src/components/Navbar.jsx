import React from 'react'
import styled from 'styled-components'
import Pages from './Pages'
import Socials from './Socials'

const Navbar = () => {
  return (
    <Wrapper className='section-center'>
      <div className='nav-title'>slurp.</div>
      <div className='nav-links'>
        <Pages />
        <Socials nav='show' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1rem);
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  z-index: 1;
  .nav-title {
    color: var(--dark-color);
    font-size: 2rem;
    font-weight: bolder;
    font-family: 'Anton', sans-serif;
    letter-spacing: 0.25rem;
    width: 10rem;
    pointer-events: none;
  }
  .nav-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`

export default Navbar
