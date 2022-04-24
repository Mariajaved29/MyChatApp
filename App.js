import React from 'react';
import { Loader } from './src/component';
import NavContainer from './src/navigation';
import { StoreProvider } from './src/context/store/index';

const App = () => {
  return(
    <StoreProvider>
  <NavContainer />
  <Loader />
  </StoreProvider>
  )
};

export default App;