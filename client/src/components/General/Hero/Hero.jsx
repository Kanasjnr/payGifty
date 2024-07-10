import React from 'react'
import '../Hero/Hero.css'
import { heroImg } from '../../../assets'

const Hero = () => {
  return (
    <div className='heroCon'>
      <div>
        <h5 className='heroBig'>With <span>PayGifty</span> Surprise your <br/> loved ones with affordable gifts  <br/>In An Easy Way</h5>

          <p>Lorem ipsum dolor, sit amet consectetur <br/>
            adipisicing elit. Libero facere ipsum nesciunt odio.</p>

            <button>Get Started</button>
      </div>
      <div>
        <img src={heroImg} alt="heropic"  className='heroPic'/>
      </div>
    </div>
    
  )
}

export default Hero