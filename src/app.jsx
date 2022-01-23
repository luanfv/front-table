import { EmployeeProvider } from './hooks/context';

import { Header } from './components/header/header.jsx';
import { Search } from './components/search/search.jsx';
import { Table } from './components/table/table.jsx';

import './global.css'

export function App(){
  return (
    <EmployeeProvider>
      <Header />
      <Search />
      <Table />
    </EmployeeProvider>
  )
}