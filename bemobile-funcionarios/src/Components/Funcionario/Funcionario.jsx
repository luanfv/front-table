import "./Funcionario.css";

const Funcionario = (props) => {
  // ###Formatação da data

  // seta data com o valor da data nao formatada
  const data = new Date(props.admission);
  // formata data para o padrao pt-BR
  const dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });


  // ###Formatacao do numero do telefone
  const part1 = props.phone.slice(0,3);
  const part2 = props.phone.slice(3,5)
  const part3 = props.phone.slice(5,9)
  const part4 = props.phone.slice(9,13)
  const phoneFormat = `+${part1} (${part2}) ${part3}-${part4}`


  return (
    <ul className="user">
      <li className="user-img">
        <img src={props.image} alt={`Foto ${props.name}`} />
      </li>
      <li className="user-name">{props.name}</li>
      <li className="user-job">{props.job}</li>
      <li className="user-admission">{dataFormatada}</li>
      <li className="user-phone">{phoneFormat}</li>
    </ul>
  );
};

export default Funcionario;
