import React, { useEffect, useState } from 'react'
import { reviews } from '../utils/constants'
import Review from './Review'
import styled from 'styled-components'
import { AnimateSharedLayout, motion } from 'framer-motion'

const Reviews = ({ className }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => (oldValue + 1) % reviews.length)
    }, 4000)
    return () => {
      clearInterval(interval)
    }
  }, [value])

  return (
    <div className={className}>
      {reviews.map((review, index) => {
        const position = index === value && 'show'
        return <Review key={index} {...review} position={position} />
      })}

      <div className='buttons'>
        <AnimateSharedLayout>
          {reviews.map((_, index) => {
            return (
              <div key={index} onClick={() => setValue(index)} className='button'>
                {index === value && (
                  <motion.div layoutId='bg' className='bg' transition={{ duration: 0.5 }}></motion.div>
                )}
              </div>
            )
          })}
        </AnimateSharedLayout>
      </div>
    </div>
  )
}

export default styled(Reviews)`
  position: relative;
  background: #ddd;
  .buttons {
    margin: 0 auto;
    width: 8rem;
    display: flex;
    justify-content: space-between;
    .button {
      cursor: pointer;
      position: relative;
      display: inline-block;
      background: var(--dark-color-lighter);
      width: 1rem;
      height: 1rem;
      margin-bottom: 2rem;
      border-radius: 1rem;
    }
    .bg {
      position: absolute;
      top: -0.6rem;
      left: -0.6rem;
      right: -0.6rem;
      bottom: -0.6rem;
      border-radius: 50%;
      border: 0.35rem solid var(--dark-color-lighter);
    }
  }
  @media (max-width: 820px) {
    .buttons {
      width: 6rem;
      .button {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.4rem;
      }
      .bg {
        top: -0.3rem;
        left: -0.3rem;
        right: -0.3rem;
        bottom: -0.3rem;
        border-width: 0.15rem;
      }
    }
  }
`
