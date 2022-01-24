import React from "react";
import "./Funcionario.css";

export default function Funcionario({
  nome,
  cargo,
  data,
  telefone,
  imagem,
  index,
}) {
  const novaData = data.split("T00:00:00.000Z").join("");
  const locale = "pt-br";
  const DataBr = new Date(novaData).toLocaleDateString(locale, {
    timeZone: "UTC",
  });

  const formatarTelefone = (numero) => {
    numero = numero.replace(/\D/g, ""); //Remove tudo o que não é dígito
    numero = numero.replace(/^(\d{2})(\d{2})/g, "+$1 ($2) "); //Coloca parênteses em volta dos dois primeiros dígitos
    numero = numero.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return numero;
  };

  const telefoneFormatado = formatarTelefone(telefone);

  return (
    <div className="funcionario-container" key={index}>
      <div>
        <img src={imagem} alt={nome} />
      </div>
      <p>{nome}</p>
      <p>{cargo}</p>
      <p className="funcionarios-header__data">{DataBr}</p>
      <p className="funcionarios-header__telefone">{telefoneFormatado}</p>
    </div>
  );
}
