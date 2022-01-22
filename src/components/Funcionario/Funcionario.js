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

  function formatarData(input) {
    var dataParte = input.match(/\d+/g),
      ano = dataParte[0].substring(0, 4), // get only two digits
      mes = dataParte[1],
      dia = dataParte[2];

    return dia + "/" + mes + "/" + ano;
  }

  const dataFormatada = formatarData(novaData);

  console.log(
    telefone.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
  );
  return (
    <div className="funcionario-container" key={index}>
      <div>
        <img src={imagem} alt={nome} />
      </div>
      <p>{nome}</p>
      <p>{cargo}</p>
      <p>{dataFormatada}</p>
      <p>{telefone}</p>
    </div>
  );
}
