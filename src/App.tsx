import React from 'react';
import {Global} from './styles/global'

import{Header} from './components/Header/index'
import {Search} from './components/Search/index'

function App() {
  return (
    <>
      <Global/>
      <Header/>
      <Search/>
    </>
  );
}

export default App;
