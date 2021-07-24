import React from 'react'
import styled from 'styled-components'

const Album = () => {
  return (
    <Wrapper>
      <img
        src='https://images.pexels.com/photos/7994750/pexels-photo-7994750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='strawberry shake'
      />
      <img
        src='https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='lychee shake'
      />
      <img
        src='https://images.pexels.com/photos/3679973/pexels-photo-3679973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='milkshake overload'
      />
      <img
        src='https://images.pexels.com/photos/8169597/pexels-photo-8169597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='strawberry shake'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    :first-child {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    :last-child {
      grid-column: 3/5;
    }
  }
  @media (max-width: 720px) {
    grid-auto-rows: 125px;
  }
  @media (max-width: 360px) {
    grid-auto-rows: 65px;
  }
`

export default Album
