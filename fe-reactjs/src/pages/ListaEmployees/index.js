import React, { useEffect, useState, useMemo } from 'react';

import { Container, TableContainer, Table } from './styles';

import formatPhone from '../../utils/formatPhone';

import NavSearch from '../../components/NavSearch';
import Input from '../../components/Input';
import lupa from '../../assets/images/lupa.svg';

export default function ListaEmployees() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [buscarFuncionario, setBuscarFuncionarios] = useState('');

  const filtrarFuncionarios = useMemo(() => funcionarios.filter((funcionario) => (
    funcionario.name.toLowerCase().includes(buscarFuncionario.toLocaleLowerCase())
    || funcionario.job.toLowerCase().includes(buscarFuncionario.toLocaleLowerCase())
    || new Date(funcionario.admission_date).toLocaleDateString().includes(buscarFuncionario)
  )), [buscarFuncionario, funcionarios]);

  function handleChangeBuscarFuncionario(event) {
    setBuscarFuncionarios(event.target.value);
  }

  useEffect(() => {
    async function getData() {
      const data = await fetch('http://localhost:4000/employess')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response.statusText();
        })
        .catch((err) => {
          console.log(err);
        });

      setFuncionarios(data);
    }
    getData();
  }, []);

  return (
    <Container>
      <NavSearch title="Funcionários">
        <Input
          value={buscarFuncionario}
          type="text"
          placeholder="Pesquisar"
          onChange={handleChangeBuscarFuncionario}
        />
        <button
          type="button"
        >
          <img src={lupa} alt="Lupa de pesquisa" />
        </button>
      </NavSearch>

      <TableContainer>
        <Table>
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
            {filtrarFuncionarios.map((funcionario) => (
              <tr key={funcionario.id}>
                <td>
                  <img
                    src={funcionario.image}
                    alt={`Foto do funcionário ${funcionario.name}`}
                  />
                </td>
                <td>{funcionario.name}</td>
                <td>{funcionario.job}</td>
                <td>{new Date(funcionario.admission_date).toLocaleDateString()}</td>
                <td>{formatPhone(funcionario.phone)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
