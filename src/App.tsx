
import {Global} from './styles/global'
import {PeoplesProvider} from './hooks/useSearch'
//Components
import{Header} from './components/Header/index'
import { Table } from './components/Table';

function App() {

  return (
    <PeoplesProvider>
        <Global/>
        <Header/>
        <Table/>
    </PeoplesProvider>
  );
}

export default App;
