import React from 'react';
import './styles.scss';

function HomeContainer() {
  return (
    <div className='appcontainer'>
        <img className='main-container-img' src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/5c700b37-c1a5-4c9a-784e-907dad93a100/public" />
        <div className='app-container'>
          <img
            src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/276968c5-c00b-489f-393f-f31c70363a00/public'}
            className={'cy-logo'}
          />
          <p className='intro-head'>Cybernetic Cyborg represents a collection of 2D & 3D Cyborg NFTs whose ownership will provide meaningful
          present-day utilities with exciting Metaverse opportunities</p>
          <h3 className='headline'>Become A Part Of The World’s Most Futuristic NFT Community Of Enablers And Changemakers.</h3>
          <h1 className='company-tag'>CYBERNETIC <br/> CYBORGS</h1>
          <p className='intro-head'>Together, We Can All Achieve More Than You Ever Thought Was Possible.</p>
          <a href='https://discord.gg/fTdxAFTusK'>
            <div className='btn'>
              <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/5cad9b47-bcd8-4733-a4a7-daa301e3c600/public'} />
              <span>JOIN THE COMMUNITY</span>
            </div>
          </a>
        </div>
      </div>
  )
}

export default HomeContainer;
