import React, { useContext } from "react";
import "./Pesquisa.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../services/Api";
import { Context } from "../../context/CtxApp";

export default function Pesquisa() {
  const { setFuncionarios } = useContext(Context);

  const procurar = async (e) => {
    e.preventDefault();
    const procurarFuncionario = e.target.procurarFuncionario.value;

    const formatarNome = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const nomeFormatado = formatarNome(procurarFuncionario);

    if (nomeFormatado === "") {
      api.get("/employess").then((response) => {
        setFuncionarios(response.data);
      });
    } else {
      api.get(`employess?name=${nomeFormatado}`).then((response) => {
        setFuncionarios(response.data);
      });
    }
  };

  return (
    <div className="pesquisa-container">
      <h1>Funcionários</h1>
      <form className="pesquisa-container__form" onSubmit={procurar}>
        <input type="text" placeholder="Pesquisar" name="procurarFuncionario" />
        <button className="pesquisa-container__icon" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}
