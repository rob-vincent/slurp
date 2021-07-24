import React from 'react'
import { links } from '../utils/constants'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { connect } from 'react-redux'

const Pages = ({ whatPage, windowSize, dispatch }) => {
  return (
    <Wrapper windowSize={windowSize}>
      <AnimateSharedLayout>
        {links.map((link, index) => {
          return (
            <Link key={index} to={link.path} onClick={() => dispatch({ type: 'SWITCH_PAGE', payload: link.path })}>
              {windowSize >= 760 ? link.text : link.icon}
              {whatPage === link.path && <motion.div className='selected' layoutId='selected'></motion.div>}
            </Link>
          )
        })}
      </AnimateSharedLayout>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    position: relative;
    display: inline-block;
    color: var(--dark-color);
    text-decoration: none;
    font-weight: bold;
    margin: 0 ${(props) => (props.windowSize >= 600 ? '1rem' : '0.5rem')};
    transition: var(--default-transition);
  }
  .selected {
    position: absolute;
    top: -0.5rem;
    bottom: -0.5rem;
    left: -0.5rem;
    right: -0.5rem;
    z-index: -1;
    background: var(--primary-color-lighter);
    border-radius: 0.35rem;
  }
`
const mapStateToProps = (state) => {
  const { whatPage, windowSize } = state
  return { whatPage, windowSize }
}

export default connect(mapStateToProps)(Pages)
