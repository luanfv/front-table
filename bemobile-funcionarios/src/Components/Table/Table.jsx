import { useEffect, useState } from "react";
import Funcionario from "../Funcionario/Funcionario";
import "./Table.css";
import { Api } from "../../Api/Api";
import { BiSearchAlt2 } from "react-icons/bi";

const Table = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [searchFuncionario, setSearchFuncionario] = useState("");
  const [filtroResultado, setFiltroResultado] = useState([]);

  const getDados = async () => {
    const response = await fetch(Api);
    const data = await response.json();
    setFuncionarios(data);
  };

  useEffect(() => {
    getDados();
  }, []);

  const getFuncionario = (searchValue) => {
    setSearchFuncionario(searchValue);
    if (searchFuncionario !== "") {
      const filterData = funcionarios.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchFuncionario.toLowerCase());
      });
      setFiltroResultado(filterData);
    } else {
      setFiltroResultado(funcionarios);
    }
  };

  return (
    <div className="table">
      <div className="nav">
        <h4 className="title">Funcionários</h4>
        <form className="search">
          <input
            type="text"
            name="search"
            placeholder="Pesquisar"
            onChange={(e) => getFuncionario(e.target.value)}
          />
          <button typeof="submit" className="btn-search">
            <BiSearchAlt2 className="lupa" />
          </button>
        </form>
      </div>

      <ul className="header-table">
        <li>FOTO</li>
        <li>NOME</li>
        <li>CARGO</li>
        <li>DATA DE ADMISSÃO</li>
        <li>TELEFONE</li>
      </ul>

      {searchFuncionario.length > 1
        ? filtroResultado.map((v) => (
            <Funcionario
              key={v.id}
              image={v.image}
              name={v.name}
              job={v.job}
              phone={v.phone}
              admission={v.admission_date}
            />
          ))
        : funcionarios.map((v) => (
            <Funcionario
              key={v.id}
              image={v.image}
              name={v.name}
              job={v.job}
              phone={v.phone}
              admission={v.admission_date}
            />
          ))}
    </div>
  );
};

export default Table;
