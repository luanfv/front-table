import React from "react";

import { Container, TableTitle, TableBody } from "./styles";

export default function Table({employees}) {
  const formatPhone = (phoneNumber) => {
    return phoneNumber
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
  }

  const formatdata = (date) => {
    const current_datetime = new Date(date).toLocaleDateString('pt-BR', {timeZone: 'UTC'});    
    return current_datetime;
  }

  return (
    <Container>
      <table>
        <TableTitle>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Data de Admissão</th>
            <th>Telefone</th>
          </tr>
        </TableTitle>
        {employees.map((embloyee) => (
          <TableBody key={embloyee.id}>
            <tr>
              <th>
                <img src={embloyee.image} alt="Profile"/>
              </th>
            </tr>
            <tr>
              <th>
                {embloyee.name}
              </th>
            </tr>
            <tr>
              <th>
                {embloyee.job}
              </th>
            </tr>
            <tr>
              <th>
                {`${formatdata(embloyee.admission_date)}`}
              </th>
            </tr>
            <tr>
              <th>
                {`${formatPhone(embloyee.phone)}`}
              </th>
            </tr>
          </TableBody>
        ))}
      </table>
    </Container> 
  );
}
