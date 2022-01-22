import React, { useEffect, useState } from "react";
import "./Funcionarios.css";
import { api } from "../../services/Api";
import Funcionario from "../Funcionario/Funcionario";
export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    api.get("/employess").then((response) => {
      console.log(response);
      setFuncionarios(response.data);
    });
  }, []);

  return (
    <section className="funcionarios-container">
      <header className="funcionarios-header">
        <p>Foto</p>
        <p>Nome</p>
        <p>Cargo</p>
        <p>Data de admissão</p>
        <p>Telefone</p>
      </header>
      <div>
        {funcionarios.map((funcionario, index) => (
          <Funcionario
            key={index}
            nome={funcionario.name}
            cargo={funcionario.job}
            data={funcionario.admission_date}
            telefone={funcionario.phone}
            imagem={funcionario.image}
          />
        ))}
      </div>
    </section>
  );
}
