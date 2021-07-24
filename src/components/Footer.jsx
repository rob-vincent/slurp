import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { contacts, about } from '../utils/constants'
import { Socials } from '.'

const Footer = ({ dispatch }) => {
  return (
    <Wrapper>
      <div className='contact-info'>
        <h4>Contact Information</h4>
        {contacts.map((contact, index) => {
          return (
            <div key={index}>
              <h5>
                {contact.icon} {contact.text}
              </h5>
            </div>
          )
        })}
      </div>
      <div className='about'>
        <h4>
          <Link to={`/about-us`} onClick={() => dispatch({ type: 'SWITCH_PAGE', payload: '/about-us' })}>
            About
          </Link>
        </h4>
        {about.map((item) => {
          return <h5 key={item.slug}>{item.text}</h5>
        })}
      </div>
      <div className='title'>
        <h2>slurp.</h2>
        <h5>&copy; 2020-2021 Slurp Milkshake Inc.</h5>
        <h5>All Rights Reserved.</h5>
      </div>
      <Socials />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 1rem 0.25rem;
  color: var(--light-color);
  background: var(--dark-color);
  > div {
    flex: 0 1 15rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  .contact-info {
    div {
      svg {
        transform: translateY(10%);
      }
    }
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  h5 {
    font-weight: lighter;
    margin: 0.25rem 0;
  }
  a {
    text-decoration: none;
    color: var(--light-color);
  }
  @media (max-width: 820px) {
    flex-wrap: wrap;
    > div {
      flex: 0 1 10rem;
    }
    .title {
      flex: 0 0 100%;
    }
  }
`
const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(Footer)
