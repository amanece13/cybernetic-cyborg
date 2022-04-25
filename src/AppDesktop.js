import React, { useRef, useEffect } from 'react'
import './app.styles.scss'
import LazyImage from './components/LazyImage';
import Countdown from 'react-countdown';
const communitySectionData = [
  {
    img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/d12a9e64-c822-4c78-55e8-ed4c7520b500/public',
    text: 'Exceptional Artists, Musicians, Designers and Creators'
  },
  {
    img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/0219ab42-eb6f-443a-2c6d-99208d388a00/public',
    text: 'Crypto Artists and Enthusiasts'
  },
  {
    img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/2a2a65be-de3d-4fcc-30a3-44b56c966500/public',
    text: 'NFTColectors,Traders & Investors'
  },
  {
    img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/f537e131-db8b-4559-de78-6b91480e5f00/public',
    text: 'Tech Enthusiasts and Developers'
  },
  {
    img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/5a7a07b3-de85-41ce-cd2a-cbcf05b62d00/public',
    text: 'Anyone and Everyone Looking and Wiling to Learn, Earn and Trade NFTs'
  }
];

const benefitsData = [{
  header: 'Direct Access',
  text: 'to Industry Experts and Endless Networking & Colaboration opportunities'
},
{
  header: 'Insider Access',
  text: 'to trading insights, tips, and secrets to help you create a sure-shot passive incomestream'
},
{
  header: 'Exclusive Access',
  text: 'to community-owned land in the Metaverse for conducting events, seminars,and exhibitions'
},
{
  header: 'Monthly Simulator',
  text: 'Programs to pitch ideas to a pool of investors'
},
{
  header: 'Voting Rights',
  text: 'to the community walet for funding other projects'
},
{
  header: 'Holders-Only',
  text: 'Give aways of Merch, NFTs, and customized VR headsets'
}]

const presaleData = [{
  img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/c667a480-dcc0-4222-ac1f-d042f5287e00/public',
  text: 'Free 10 NFT Giveaways'
},
{
  img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/c6eda699-7437-4500-32be-aa9060381800/public',
  text: '500 Whitelist Spots'
},
{
  img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/3285be0a-f598-4fe4-638d-c6efd873a600/public',
  text: 'Exclusive Interaction Sessions & AMA Streams to educate yourself about the NFT and Metaverse'
},
{
  img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/51f40e83-2b14-4217-eb7c-ef59a93a1600/public',
  text: 'Free Cyberoids for Daily Tasks and Invite'
},
{
  img: 'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/11252dcf-1389-4194-b71b-d35da405b800/public',
  text: 'Chance to be a Genesis Member'
}]

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
}]



const App = ({ width }) => {
  const imageRef = useRef();
  useEffect(() => {
    const element = imageRef.current;
    console.log(element, "hello");
  }, [width]);

  return (
    <div className="app">
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
      <div className="apptimersection">
        <div className='timer-section'>
          <h3 className='timer-header'>NFT Drop Coming SOON</h3>
          <Countdown date={Date.now() + 100000000} />
        </div>
        <div className='intro-panes'>
          <img src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/730109c0-dabb-4f60-284f-36cc16dd2300/public" />
          <img src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/9b38c045-d2de-48c2-21a3-412ff32f8d00/public" />
        </div>
      </div>
      <div className='community-section'>
        <h1>Who is This Community For?</h1>
        <div className='community-enablers'>
          {communitySectionData.map((comd, index) => (
            <div className='com-enabler'>
              <img src={comd.img} />
              <span>{comd.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='intro-calling-section'>
        <div className='container-calling'>
          <img src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/3e2fd716-d555-4c25-4696-c993c8559600/public" />
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
          <img src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/907bad7e-8e6e-4599-5573-3f4234faf400/public" />
        </div>
      </div>
      <div className='benefits'>
        <h1>Benefits Of Cybernetic Cyborg Ownership Include</h1>
        <div className='ownership-section'>
          <img src='https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/48ed780e-e313-4b05-f6ff-981223942300/public' />
          <div className='ownership-privilege'>
            {benefitsData.map((bend, index) => (
              <div className='ownership-keys'>
                <img src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/4423c5a9-c0a6-4dd5-f539-94bd1f8a8f00/public" />
                <h3>{bend.header}</h3>
                <span>{bend.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='pre-sale'>
        <div className='header-section'>
          <img src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/4423c5a9-c0a6-4dd5-f539-94bd1f8a8f00/public" />
          <h1>And That’s Not All...</h1>
          <h2>Early Members Get Access To Exciting Pre-Sale Ofers</h2>
        </div>
        <div className='pre-sale-section'>
          {presaleData.map((pred) => (
            <div className='presale-box'>
              <img src={pred.img} />
              <h4>{pred.text}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className='growing-community'>
        <h1>A Message From Our Growing Community</h1>
        <img src='https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/0238c83a-b23a-4427-a961-a02778f05100/public' />
        <p>If you’ve read until here, we’ve good news for you. You already have taken your first step into the Cyborg community.</p>
        <p>To Take the immediate next step and re-affirm your presence, join us in the discord community and ready yourself for the launch, Cyborg!</p>
        <a href='https://discord.gg/fTdxAFTusK'>
          <div className='btn'>
            <img src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/ed34180b-d829-4817-a0aa-25cc312d8700/public" />
            <span>Join The Community</span>
          </div>
        </a>
      </div>
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
     
    </div>
  )
}

export default App;
