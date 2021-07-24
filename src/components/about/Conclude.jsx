import React from 'react'
import styled from 'styled-components'

const Conclude = ({ className }) => {
  return (
    <div className={className}>
      <h2>All the information, support and inspiration you need</h2>
      <p>
        Sustainable marfa microdosing, 3 wolf moon pork belly gentrify truffaut yr. Austin bespoke af cronut tacos marfa
        put a bird on it. Snackwave flexitarian drinking vinegar aesthetic jean shorts pour-over austin fingerstache
        truffaut chambray. Brunch small batch fingerstache marfa.
        <br />
        <br />
        Next level tousled flexitarian vape shaman iPhone adaptogen. Sriracha heirloom coloring book gochujang. Glossier
        raclette tumeric fanny pack jianbing. Ennui gastropub poke blue bottle, selvage ramps gluten-free four loko
        fanny pack.
      </p>
    </div>
  )
}

export default styled(Conclude)`
  padding: 2rem 1rem;
  h2 {
    padding-bottom: 0.5rem;
  }
`
