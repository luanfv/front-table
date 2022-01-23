import { createContext, useState, useContext } from 'react';

const EmployeeContext = createContext()

export function EmployeeProvider({ children }) {
  const [name, setName] = useState('')

  return (
    <EmployeeContext.Provider
      value={{ name, setName }}
    >
      {children}
    </EmployeeContext.Provider>
  )

}

export function useEmployee() {
  const context = useContext(EmployeeContext);

  return context;
}

