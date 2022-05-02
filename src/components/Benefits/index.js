import React from 'react'

const Benefits = () => {

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
  return (
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
  )
}

export default Benefits
