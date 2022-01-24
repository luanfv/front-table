import React, { createContext, useState, useContext } from 'react';

const ApiContext = createContext();

export default function Context({children}) {
  const [employees, setEmployees] = useState([]);

  return (
    <ApiContext.Provider
      value={{
        employees,
        setEmployees,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export function useApi() {
  const context = useContext(ApiContext);
  return context;
}
