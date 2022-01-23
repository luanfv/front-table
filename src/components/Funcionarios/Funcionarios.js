import React, { useContext, useEffect, useState } from "react";
import "./Funcionarios.css";
import { api } from "../../services/Api";
import Funcionario from "../Funcionario/Funcionario";
import { Context } from "../../context/CtxApp";
import Vazio from "../Vazio/Vazio";
export default function Funcionarios() {
  const { funcionarios, setFuncionarios } = useContext(Context);

  useEffect(() => {
    api.get("/employess").then((response) => {
      setFuncionarios(response.data);
    });
  }, []);
  console.log(funcionarios);
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
        {funcionarios.length <= 0 && <Vazio />}
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
