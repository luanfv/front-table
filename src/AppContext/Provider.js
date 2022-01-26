import React, { useState } from 'react'
import AppContext from './Context'


const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <AppContext.Provider value={{ query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
