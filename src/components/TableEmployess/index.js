import React, { useContext } from 'react'

import AppContext from '../../AppContext/Context'

import './styles.css'

const TableEmployess = ({ employess }) => {
    const { query } = useContext(AppContext)
    return (
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
                    {employess.filter(e => {
                        if (query === "") {
                            return e
                        }
                        if (e.name.toLowerCase().includes(query.toLowerCase())) {
                            return e
                        }
                    }).map(employee => {
                        const formatedDate = employee.admission_date.split('T', 1)[0].split('-').reverse().join('/')
                        return (
                            <tr key={employee.id}>
                                <td><img src={employee.image} alt={employee.name} /></td>
                                <td>{employee.name}</td>
                                <td>{employee.job}</td>
                                <td>{formatedDate}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableEmployess