import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = ({ dispatch }) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <h6>Best seller</h6>
      </div>
      <div className='info'>
        <h1>Milkshake</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe explicabo a vero, eaque rerum beatae
          totam sit voluptas dicta inventore commodi voluptatum accusantium et assumenda ut quasi necessitatibus earum
          ratione itaque asperiores dolores quos eos nam. Similique vero, dolorum vel numquam, nobis obcaecati sapiente,
          accusantium iure ut dolore expedita?
        </p>
        <Link to='/about-us' className='btn' onClick={() => dispatch({ type: 'SWITCH_PAGE', payload: '/about-us' })}>
          Learn more
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  padding: 2rem 2rem 3rem 2rem;
  background: var(--light-color);
  .img-container {
    margin: 0 2rem;
    flex: 0 0 200px;
    position: relative;
    width: 200px;
    height: 300px;
    border: 0.5px solid var(--light-color-lighter);
    background: url('https://images.pexels.com/photos/414262/pexels-photo-414262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
      no-repeat center bottom / cover;
    h6 {
      position: absolute;
      right: 0;
      top: 0.75rem;
      padding: 0.1rem 1rem 0.1rem 0.25rem;
      color: var(--light-color);
      background: var(--danger-color);
    }
  }
  .info {
    flex: 1 0 450px;
    h1,
    p {
      color: var(--dark-color);
    }
    h1 {
      font-size: 3rem;
      padding-bottom: 1rem;
    }
    p {
      padding-bottom: 2.5rem;
    }
    a {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 820px) {
    flex-wrap: wrap;
    justify-content: center;
    .info {
      flex-shrink: 1;
      padding: 1rem 0 0 0;
      text-align: center;
      h1 {
        font-size: 2rem;
      }
      a {
        font-size: 1rem;
      }
    }
  }
`

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(Hero)
