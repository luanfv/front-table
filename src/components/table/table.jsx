import {useState, useEffect} from 'react'
import { useEmployee } from "../../hooks/context";
import './table.css'

export function Table(){
  const [data, setData] = useState([])
  const { name } = useEmployee();

  useEffect(() => {
    fetch('http://localhost:3000/employess')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return(
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th>TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(employee => {
            if(employee.name.toLowerCase().includes(name.toLowerCase())){
              return employee
            }
          }).map(employee => (
            <tr key={employee.id}>
              <td><img src={employee.image} alt={employee.name} /></td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{new Date(employee.admission_date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</td>
              <td>{'+'+ employee.phone.substring(0,2) + ' ' + '(' + employee.phone.substring(2,4) + ')' + ' ' + employee.phone.substring(4,9) + '-' + employee.phone.substring(9,13)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}