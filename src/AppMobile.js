import React from 'react';
import './app.styles.scss'


const AppMobile = ({ }) => {
  return (
    <div className="AppMobile">
      <div className='header'>
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/b4d43007-838e-409a-b2f8-0d872b553500/public'} alt={'Cybernetic Logo'} className={'cyLogo'} />
      </div>
      <div className='mobileBanner'>
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/f3299348-fe81-409c-4be8-6efe4890aa00/public'} alt={'Web Banner Mobile'} className={'webBannerMobile'} />
      </div>
      <div className='comingSoonContainer'>
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/e3951b2f-b82a-4285-aa7f-c5196e357c00/public'} alt={'Coming Soon'} className={'comingSoonImage'} />
      </div>
      <div className='followContainer'>
        <div className='cyContainer'>
          <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/7b7fe1ef-1f7c-4afb-c197-821961b75400/public'} alt={'Cybernetic Logo'} className={'cyLogoMobile'} />
        </div>
        <div className='socialContact'>
          <h1>JOIN US</h1>
          <a href='https://twitter.com/cybernet_cyborg'><img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/37bb9efb-abc2-4fdc-2986-1434b2044600/public'} alt={'Twitter'} className={'twitter'} /></a>
          <a href='https://instagram.com/cybernetic_cyborg'><img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/1f775319-2c74-409e-60f8-c4cbacadf900/public'} alt={'Insta'} className={'insta'} /></a>
          <a href='https://discord.gg/fTdxAFTusK'><img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/9205b7f9-e887-4c02-ce9f-983d42af9c00/public'} alt={'Discord'} className={'discord'} /></a>
        </div>
      </div>
      <div className='comingSoonContainer'>
        <img src={'https://imagedelivery.net/ml6iqrdpce69WkTk_gvNdQ/a1440b5f-4f86-4b93-bb56-eabaa59cc800/public'} alt={'Coming Soon'} className={'comingSoonM'} />
      </div>
    </div>
  )
}

export default AppMobile;
