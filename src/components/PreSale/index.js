import React from 'react'
import './styles.scss';

const PreSale = () => {

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
  return (
    <div className='pre-sale'>
        <div className='header-section'>
          <img src="https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/4423c5a9-c0a6-4dd5-f539-94bd1f8a8f00/public" />
          <h1>And That’s Not All...</h1>
          <h2>Early Members Get Access To Exciting Pre-Sale Ofers</h2>
        </div>
        <div className='pre-sale-section'>
          {presaleData.map((pred, index) => (
            <div className='presale-box' key={index}>
              <img src={pred.img} />
              <h4>{pred.text}</h4>
            </div>
          ))}
        </div>
      </div>
  )
}

export default PreSale;
