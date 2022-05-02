import React from 'react'
import './styles.scss';

const RoadMap = () => {


const roadMapData = [{
    header: '10% completed phase',
    text: 'Cyborgs HQ,CYCY wil have their own land in the Metaverse: The first thing we do is buy land in the metaverse. There will be a panel between the Krypton members who will get the right to vote on where to buy the land.The chosen land will serve as the D A O (decentralized autonomous organization). All the virtual meetings will be held in the chosen D A O space.'
  },
  {
    header: '20% completed phase',
    text: 'We will set up a community wallet to fund other projects. We will have a stimulator program every month. Each member can pitch their ideas to a pool of investors in our community. We will be creating different liquidity pools and all of them will be invested in other projects. All Krypton members will carry the voting rights.'
  },
  {
    header: '30% completed phase',
    text: `Merch & CYCY brand: Release our CYCY Merch collection that will include an
    inventory of stickers, hoodies, T-shirts, Gym Bags(LED functionalities with
    changing images), accessories (chain). Another aspect of our merchandise will
    focus on VR sets - our own well-designed customized VR headsets that could
    be used to collaborate with other companies.`
  }];
  return (
    <div className='road-map'>
        <img src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/cfc30b61-5b57-43bd-2743-67e3d6ba1800/public" />
        <div className='roadmap-content'>
          <h1>Roadmap 1.0</h1>
          <p>ITo break it down simply-after mint, weare ready to start the project – when the 4,999 2Ds are sold out we have the community funding ready and can proceed with the folowing steps:</p>
          {roadMapData.map((roadd, index) => (
            <div className='roadmap-data'>
              <h3>{roadd.header}</h3>
              <span>{roadd.text}</span>
            </div>
          ))}
           <a href='https://discord.gg/fTdxAFTusK'>
            <div className='yellow-btn'>
              Know More
            </div>
          </a>
        </div>
        <img
            src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/276968c5-c00b-489f-393f-f31c70363a00/public'}
            className={'cy-logo-bottom'}
          />
        <p className='footer-text'>Copyright. 2022. Cybernetic Cyborg. All rights reserved.</p>
      </div>
  )
}

export default RoadMap;
