import React, { useState, useEffect } from 'react'

import AppProvider from './AppContext/Provider'


import './App.css'

// Components
import TableEmployess from './components/TableEmployess'
import MainHeader from './components/MainHeader'

//Templates
import DefaultTemplate from './templates/DefaultTemplate'


function App() {
  const apiURL = 'http://localhost:3001/employess'
  const [employess, setEmployees] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setEmployees(data)
      })
  }, [])

  return (
    <AppProvider>
      <DefaultTemplate>
        <MainHeader title="Funcionários" isSearchBox />
        <TableEmployess employess={employess} />
      </DefaultTemplate>
    </AppProvider>

  );
}

export default App;
