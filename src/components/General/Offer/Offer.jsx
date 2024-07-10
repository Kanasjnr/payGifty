import React from 'react'
import '../Offer/Offer.css'
import { giftImg, redeemImg, designImg } from '../../../assets'

const Offer = () => {
  return (
    <div className='offerCon'>
      <h2>What Can You Do On PayGifty</h2>
      <div className='cardBox'>
        <div className='cardContent'>
          <div>
            <img src={giftImg} alt="" />
          </div>
          <h4>Create Crypto Gift Card</h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate pariatur soluta veritatis incidunt eos! Molestias dignissimos optio necessitatibus sunt.
        </div>
        <div className='cardContent'>
          <div>
            <img src={redeemImg} alt="" />
          </div>
          <h2>Redeem Crypto Gift Card</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate pariatur soluta veritatis incidunt eos! Molestias dignissimos optio necessitatibus sunt.
        </div>
        <div className='cardContent'>
        <div>
            <img src={designImg } alt="" />
          </div>
          <h4>Customise Gift Card Design</h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate pariatur soluta veritatis incidunt eos! Molestias dignissimos optio necessitatibus sunt.
        </div>

      </div>
      
    </div>
  )
}

export default Offer