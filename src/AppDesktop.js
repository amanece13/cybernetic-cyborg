import React from 'react'
import './app.styles.scss'

const App = () => {
  return (
    <div className="App">
      <div className={'leftContainer'}>
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/e4eacff5-3fec-489f-120f-380ad2c87000/public'}
          alt={'banner'} className={'leftBannerImage'} />
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/b4d43007-838e-409a-b2f8-0d872b553500/public'}
          alt={'Cybernetic Logo'} className={'cyLogo'} />
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/1c6c5d12-0e2a-4e8f-555c-12044d8a9200/public'}
          salt={'Coming Soon Logo'} className={'comingSoon'} />
      </div>
      <div className={'rightContainer'}>
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/9189bb8a-947a-4153-e3e2-a056aef85900/public'}
          alt={'introvideo'}/>
      </div>
    </div>
  )
}

export default App;
