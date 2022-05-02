import React, { useRef, useEffect } from 'react'
import HomeContainer from './components/HomeContainer';
import TimerSection from './components/TimerSection';
import './app.styles.scss'
import IntroSection from './components/IntroSection';
import CommunitySection from './components/CommunitySection';
import PreSale from './components/PreSale';
import GrowingCommunity from './components/GrowingCommunity';
import RoadMap from './components/RoadMap';
import LazyLoad from 'react-lazyload';



const App = ({ width }) => {
  const imageRef = useRef();
  useEffect(() => {
    const element = imageRef.current;
    console.log(element, "hello");
  }, [width]);

  return (
    <div className="app">
      <LazyLoad>
        <HomeContainer />
      </LazyLoad>
      <LazyLoad>
        <TimerSection />
      </LazyLoad>
      <LazyLoad>
        <CommunitySection />
      </LazyLoad>
      <LazyLoad>
        <IntroSection />
      </LazyLoad>
      <LazyLoad>
        <PreSale />
      </LazyLoad>
      <LazyLoad>
        <GrowingCommunity />
      </LazyLoad>
      <LazyLoad>
        <RoadMap />
      </LazyLoad>
    </div>
  )
}

export default App;
