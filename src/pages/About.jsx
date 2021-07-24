import React from 'react'
import { Welcome, Delivery, Payment, Conclude } from '../components'

const About = () => {
  return (
    <div className='section-center'>
      <Welcome />
      <Payment />
      <Delivery />
      <Conclude />
    </div>
  )
}

export default About
