import React, { useRef, useEffect } from 'react'
import './app.styles.scss'

const App = ({ width }) => {
  const imageRef = useRef();
  useEffect(() => {
    const element = imageRef.current;
    console.log(element, "hello");
  }, [width]);

  return (
    <div className="App">
      <div className={'leftContainer'}>
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/340c5114-f240-4aa7-08d8-dc1ac3eb5f00/public'}
          alt={'banner'} className={'leftBannerImage'} />
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/b4d43007-838e-409a-b2f8-0d872b553500/public'}
          alt={'Cybernetic Logo'} className={'cyLogo'} />
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/1c6c5d12-0e2a-4e8f-555c-12044d8a9200/public'}
          salt={'Coming Soon Logo'} className={'comingSoon'} />
        <a href='https://discord.gg/fTdxAFTusK'><img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/0a79353c-bfee-46c8-9e01-0d5a5d17b200/public'}
          salt={'Join Discord Image'} className={'join-discord'} /></a>
      </div>
      <div className={'rightContainer'}>
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/9189bb8a-947a-4153-e3e2-a056aef85900/public'}
          alt={'introvideo'} ref={imageRef} className='main-right-banner'/>
        <a href='https://instagram.com/cybernetic_cyborg'><img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/41e8a983-7997-4142-e69c-b3d0846c9900/public'}
          alt={'Insta'} className='icon-instagram' /></a>
        <a href='https://twitter.com/cybernet_cyborg'><img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/ee272936-0a46-4126-62fb-e30a11238500/public'}
          alt={'Twitter'} className='icon-twitter' /></a>
      </div>
    </div>
  )
}

export default App;
