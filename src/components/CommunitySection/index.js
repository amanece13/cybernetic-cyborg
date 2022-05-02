import React from 'react'
import './styles.scss'

const CommunitySection = () => {
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
  return (
    <div className='community-section'>
        <h1>Who is This Community For?</h1>
        <div className='community-enablers'>
          {communitySectionData.map((comd, index) => (
            <div className='com-enabler' key={index}>
              <img src={comd.img} />
              <span>{comd.text}</span>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CommunitySection;
