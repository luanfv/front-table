import {useState} from 'react';
import {Global} from './styles/global'
import {PeoplesProvider} from './hooks/useSearch'
//Components
import{Header} from './components/Header/index'
import {Search} from './components/Search/index'
import { DataTable } from './components/DataTable';

function App() {

  return (
    <PeoplesProvider>
      <Global/>
      <Header/>
      <Search/>
      <DataTable/>
    </PeoplesProvider>
  );
}

export default App;
