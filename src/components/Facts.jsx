import React from 'react'
import styled from 'styled-components'
import { GiFruitBowl, GiChocolateBar, GiMilkCarton } from 'react-icons/gi'

const Facts = () => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src='https://images.pexels.com/photos/4443492/pexels-photo-4443492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
      </div>
      <div className='fun-facts'>
        <article>
          <h3>
            <GiFruitBowl /> {'  '}
            Fresh Fruits
          </h3>
          <p>Offal umami beard, migas small batch air plant hashtag 3 wolf moon pabst hammock skateboard wayfarers.</p>
        </article>
        <hr />
        <article>
          <h3>
            <GiChocolateBar /> {'  '}
            Imported Chocolates
          </h3>
          <p>
            Fixie offal locavore yuccie austin, post-ironic cliche letterpress sustainable keytar tattooed. Green juice
            hoodie hella.
          </p>
        </article>
        <hr />
        <article>
          <h3>
            <GiMilkCarton /> {'  '}
            Low Fat Milk
          </h3>
          <p>Wayfarers mlkshk keffiyeh subway tile pug shabby chic unicorn artisan.</p>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-auto-rows: auto;
  place-items: center;
  padding: 1rem;
  color: var(--dark-color);
  .img-container,
  .fun-facts {
    padding: 1rem 2rem;
  }
  .img-container {
    height: 17.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0 auto;
    }
  }
  .fun-facts {
    article {
      margin: 1rem 0;
      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
      }
      p {
        font-size: 0.95rem;
      }
    }
  }
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    .img-container,
    .fun-facts {
      padding: 0.5rem;
    }
    .img-container {
      height: 10rem;
    }
    .fun-facts {
      display: block;
      article {
        h3 {
          font-size: 1.25rem;
        }
      }
    }
  }
`

export default Facts
