import React from 'react'
import styled from 'styled-components'
import { payment } from '../../utils/payment'

const Payment = ({ className }) => {
  return (
    <div className={className}>
      <h1>Payment methods</h1>
      <div className='methods'>
        {payment.map((item, index) => {
          return (
            <section key={index}>
              {item.icon}
              <h4>{item.method}</h4>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default styled(Payment)`
  padding: 0 1rem;
  .methods {
    padding: 1rem 0 2rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    section {
      border: 1px solid var(--dark-color);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      padding: 0.25rem 1rem;
      h4 {
        margin-left: 1rem;
        font-size: 1rem;
      }
    }
    @media (max-width: 560px) {
      grid-template-columns: repeat(2, 1fr);
      section {
        h4 {
          font-size: 0.7rem;
        }
      }
    }
  }
`
