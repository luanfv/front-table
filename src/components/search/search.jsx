import { useState, useEffect } from 'react'
import { useEmployee } from "../../hooks/context";
import { AiOutlineSearch } from "react-icons/ai";

import './search.css'

export function Search(){
  const [employeeName, setEmployeeName] = useState('')
  const { setName } = useEmployee();
  
  useEffect(() => {
    setName(employeeName)
  }, [employeeName])

  return (
    <div className="wrapper">
      <h3>Funcionários</h3>
      <form>
        <input 
          type="text" 
          value={employeeName} 
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="Pesquisar"  
        />
        <AiOutlineSearch className="search-icon"/>
      </form>
    </div>
  )
}