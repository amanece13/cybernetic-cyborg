import React from 'react'
import Countdown from 'react-countdown';
import './styles.scss';

const TimerSection = () => {
  return (
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
  )
}

export default TimerSection;
