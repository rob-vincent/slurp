import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
}

const childrenVariant = {
  hidden: { opacity: 0, x: -25 },
  show: { opacity: 1, x: 0 },
}

const Welcome = () => {
  return (
    <Wrapper>
      <div className='img'>
        <motion.div className='info' initial='hidden' animate='show' variants={containerVariant}>
          {['Nutritious', 'Flavorful', 'Big Servings', 'Best'].map((desc, index) => {
            return (
              <motion.h4 key={index} variants={childrenVariant}>
                <span>{desc}</span>
              </motion.h4>
            )
          })}
        </motion.div>
      </div>
      <div className='service'>
        <h2>Welcome to slurp!</h2>
        <h3>We've been serving the best milkshakes for more than 10 years.</h3>
        <p>
          Vexillologist palo santo occupy, asymmetrical listicle hot chicken leggings. Church-key woke lyft, bespoke
          echo park selfies biodiesel organic squid art party dreamcatcher put a bird on it. Swag before they sold out
          pork belly, 90's freegan church-key cray kale chips roof party biodiesel wayfarers. Single-origin coffee
          succulents lomo blue bottle cloud bread pitchfork.
          <br />
          <br />
          Pok pok shabby chic banjo stumptown thundercats viral skateboard, food truck pitchfork forage semiotics retro.
          Street art 90's aesthetic kinfolk, sartorial stumptown live-edge taiyaki wolf locavore authentic. Blue bottle
          deep v skateboard, cloud bread next level marfa twee man braid. Gastropub XOXO prism letterpress, narwhal man
          bun plaid salvia shoreditch stumptown. Viral intelligentsia kitsch XOXO 3 wolf moon.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .img {
    background: url('https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      no-repeat center center / cover;
    width: 100%;
    height: 12rem;
    position: relative;
    .info {
      position: absolute;
      top: 1rem;
      right: 1rem;
      bottom: 1rem;
      width: 8rem;
      h4 {
        text-align: right;
        span {
          margin: 0.35rem 0;
          padding: 0.25rem 0.75rem;
          display: inline-block;
          background: var(--success-color);
          border-radius: 0.75rem;
        }
      }
    }
  }
  .service {
    padding: 2rem 1rem;
    h2 {
      font-size: 2rem;
      margin-bottom: 0.25rem;
    }
    h3 {
      margin-bottom: 1rem;
    }
  }
`

export default Welcome
