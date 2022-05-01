import React, { useLayoutEffect, useState, Fragment } from 'react'
import AppDesktop from './AppDesktop';
import AppMobile from './AppMobile';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const App = () => {
  const [width, height] = useWindowSize();
  const isMobile = width < 800;
  // const Layout = isMobile ? AppMobile : AppDesktop
  return (
    <AppDesktop width={width} isMobile={isMobile} />
  )
}

export default App;
