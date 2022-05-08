import React from 'react'
import './styles.scss'
const IntroSection = () =>{
  return (
    <div className='intro-calling-section'>
        <div className='container-calling'>
          <img className="container-call-img left" src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/3e2fd716-d555-4c25-4696-c993c8559600/public" />
          <div className='our-calling'>
            <h1>Our Calling</h1>
            <p>To Build a Colaborative Community of Exceptional Artists, NFT Traders, Investors, Builders, Entrepreneurs and Educators that enable each other to make the most of Web3.0</p>
            <a href='https://discord.gg/fTdxAFTusK'>
              <div className='btn'>
              <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/5cad9b47-bcd8-4733-a4a7-daa301e3c600/public'} />
              <span>JOIN THE COMMUNITY</span>
              </div>
            </a>
          </div>
          <img className="container-call-img right" src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/907bad7e-8e6e-4599-5573-3f4234faf400/public" />
        </div>
      </div>
  )
}

export default IntroSection;
