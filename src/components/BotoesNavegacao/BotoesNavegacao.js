import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import { api } from "../../services/Api";
import "./BotoesNavegacao.css";

export default function BotoesNavegacao() {
  const { pagina, setPagina, limite } = useContext(Context);
  const [totalFuncionarios, setTotalFuncionarios] = useState([]);

  const total = Math.ceil(totalFuncionarios.length / limite);

  useEffect(() => {
    api.get(`/employess`).then((response) => {
      setTotalFuncionarios(response.data);
    });
  }, []);

  const proximo = () => {
    setPagina(pagina + 1);
  };

  const anterior = () => {
    setPagina(pagina - 1);
  };

  return (
    <div className="botoesNavegacao-container">
      <button
        onClick={anterior}
        className={
          pagina <= 1
            ? "botoesNavegacao-container__anterior-none"
            : "botoesNavegacao-container__anterior"
        }
      >
        Anterior
      </button>
      <button
        onClick={proximo}
        className={
          pagina >= total
            ? "botoesNavegacao-container__proximo-none"
            : "botoesNavegacao-container__proximo"
        }
      >
        Próximo
      </button>
    </div>
  );
}
