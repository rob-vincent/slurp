import React, { useEffect } from 'react'
import { Welcome, Delivery, Payment, Conclude } from '../components'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
