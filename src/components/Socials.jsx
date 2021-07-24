import React from 'react'
import { socials } from '../utils/constants'
import styled from 'styled-components'

const Socials = ({ className, nav }) => {
  return (
    <div className={className} nav={nav}>
      {socials.map((social, index) => {
        return (
          <a key={index} href={social.link}>
            {social.icon}
          </a>
        )
      })}
    </div>
  )
}

export default styled(Socials)`
  a {
    color: var(--dark-color);
    text-decoration: none;
    position: relative;
    top: 0.225rem;
    font-size: 1.5rem;
    margin: 0 0.25rem;
    transition: var(--default-transition);
    :hover {
      color: var(--primary-color);
      top: 0.1rem;
    }
  }
  @media (max-width: 520px) {
    display: ${(props) => (props.nav ? 'none' : 'flex')};
    justify-content: space-evenly;
  }
`
