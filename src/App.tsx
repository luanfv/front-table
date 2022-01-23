import React from 'react';
import {Global} from './styles/global'

import{Header} from './components/Header/index'
import {Search} from './components/Search/index'
import { DataTable } from './components/DataTable';

function App() {
  return (
    <>
      <Global/>
      <Header/>
      <Search/>
      <DataTable/>
    </>
  );
}

export default App;
