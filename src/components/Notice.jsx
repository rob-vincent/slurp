import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Notice = ({ switchPage }) => {
  return (
    <Wrapper>
      <h4>Delivery & Shipment Update</h4>
      <p>
        Due to the pandemic of COVID-19, we are experiencing delays with shipments. We are currently working to minimize
        any delay for customers. If you have questions about your orders, stock availability, or need assistance, please{' '}
        <Link to='/contact-us' onClick={() => switchPage()}>
          contact us
        </Link>
        .
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0.5rem 0.5rem 1rem 1rem;
  margin-bottom: 1rem;
  color: var(--light-color);
  background: var(--danger-color);
  h4 {
    margin: 0.5rem 0;
  }
  p {
    font-size: 0.85rem;
    a {
      text-decoration: none;
      font-weight: bold;
      color: var(--success-color);
    }
  }
`

const mapDispatchToProps = (dispatch) => {
  return {
    switchPage: () => dispatch({ type: 'SWITCH_PAGE', payload: '/contact-us' }),
  }
}

export default connect(null, mapDispatchToProps)(Notice)
