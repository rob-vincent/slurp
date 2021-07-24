import React from 'react'
import styled from 'styled-components'
import location from '../images/Location.PNG'
import { contacts } from '../utils/constants'
import { MdMail } from 'react-icons/md'

const Contact = () => {
  return (
    <Wrapper className='section-center'>
      <img src={location} alt='location' />
      <div className='retailer'>
        <div>
          <h2>Want to be a retailer?</h2>
          <hr />
          {contacts.map((contact, index) => {
            return (
              <div key={index}>
                <h5>
                  {contact.icon} {contact.text}
                </h5>
              </div>
            )
          })}
        </div>
      </div>
      <div className='retailer'>
        <h2>Want to be a city distributor?</h2>
        <hr />
        <div>
          <h6>
            <i>Email us! We love to hear from you.</i>
          </h6>
          <h5>
            <MdMail /> rtzn@slurp-distributor.com
          </h5>
        </div>
      </div>
      <div className='email'>
        <h2>Email Security</h2>
        <hr />
        <p>
          Please be assured that our company strive to provide the most secure and trustworthy communications with all
          our customers and suppliers. If you receive any unexpected emails claiming to be from us, or from companies
          claiming to be working on behalf of <strong>SLURP</strong>, please do not click on any links or reply to the
          email. Report these incident to our IT Security Team. This can be done by either saving the email as a .msg
          file and then emailing the file, or by following one of the methods below.
        </p>
      </div>
      <div className='privacy'>
        <h2>Privacy Policy</h2>
        <hr />
        <p>
          Slurp is committed to safeguarding your privacy online. Please read the following policy to understand how
          your personal information will be treated when you use or register on the Slurp Online site.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    width: 75%;
    height: 22.5rem;
    object-fit: cover;
  }
  .retailer,
  .email,
  .privacy {
    margin: 2rem 1rem;
    h2 {
      margin-bottom: 0.25rem;
    }
    h5,
    p {
      margin-top: 0.5rem;
      margin-left: 1rem;
    }
    hr {
      width: 50%;
      max-width: 20rem;
    }
  }
  @media (max-width: 800px) {
    img {
      width: 100%;
    }
  }
  @media (max-width: 520px) {
    .retailer,
    .email,
    .privacy {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
`

export default Contact
