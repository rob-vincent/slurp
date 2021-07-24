import React from 'react'
import styled from 'styled-components'
import { FaMotorcycle, FaCar, FaTruck } from 'react-icons/fa'

const Delivery = () => {
  return (
    <Wrapper>
      <div className='card'>
        <FaMotorcycle />
        <h3>Motorcycle</h3>
        <h5>Up to: 20kg</h5>
        <p>Door-to-door deliveries</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio debitis quibusdam voluptas itaque eveniet
          corrupti quos repudiandae reiciendis iusto dolor?
        </p>
      </div>
      <div className='card'>
        <FaCar />
        <h3>Sedan</h3>
        <h5>Up to: 200kg</h5>
        <p>For retailers</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores, minima necessitatibus illo amet
          similique mollitia.
        </p>
      </div>
      <div className='card'>
        <FaTruck />
        <h3>Small Truck</h3>
        <h5>Up to: 1000kg</h5>
        <p>For city distributors</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt architecto accusamus, praesentium
          exercitationem quam corporis. Et dolor deserunt alias quis!
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: url('https://images.pexels.com/photos/2351085/pexels-photo-2351085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    no-repeat center center / cover;
  padding-top: 2rem;
  .card {
    flex: 0 0 16rem;
    margin: 2rem;
    height: 20rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(0.5rem);
    svg {
      position: relative;
      top: -2rem;
      color: var(--dark-color);
      width: 4.5rem;
      height: 4.5rem;
      padding: 0.5rem;
      border-radius: 2.5rem;
      background: var(--warning-color);
    }
    p {
      padding: 1rem 1rem 0.25rem 1rem;
    }
  }
`

export default Delivery
