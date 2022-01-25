async function getData() {
  const [employees] = await Promise.all([
    fetchJson('http://localhost:4000/employess')
  ]);

  listarFuncionarios(employees);

  const input = document.querySelector('#pesquisar-funcionarios');
  input.addEventListener('change', (e) =>
    listarFuncionarios(employees, e.target.value)
  );
}
getData();

function listarFuncionarios(funcionarios, value = '') {
  const tableFuncionarios = document.querySelector('#tabela-funcionarios');

  let buscarFuncionario = value;
  const buscarFuncionarios = funcionarios.filter((funcionario) => (
    funcionario.name.toLowerCase().includes(buscarFuncionario.toLocaleLowerCase())
    || funcionario.job.toLowerCase().includes(buscarFuncionario.toLocaleLowerCase())
    || new Date(funcionario.admission_date).toLocaleDateString().includes(buscarFuncionario)
  ));

  tableFuncionarios.innerHTML = '';

  for (let funcionario of buscarFuncionarios) {
    const tr = document.createElement('tr');
    const colFoto = document.createElement('td');
    const foto = document.createElement('img');
    foto.setAttribute('src', `${funcionario.image}`);
    foto.className = 'foto-funcionario';
    const colNome = document.createElement('td');
    const colCargo = document.createElement('td');
    const colAdmissao = document.createElement('td');
    const colTelefone = document.createElement('td');
    colNome.textContent = funcionario.name;
    colCargo.textContent = funcionario.job;
    colAdmissao.textContent= new Date(funcionario.admission_date).toLocaleDateString();
    colTelefone.textContent = formatPhoneNumber(funcionario.phone);

    colFoto.append(foto);

    tr.append(colFoto);
    tr.append(colNome);
    tr.append(colCargo);
    tr.append(colAdmissao);
    tr.append(colTelefone);

    tableFuncionarios.appendChild(tr);
  }
}

function fetchJson(url) {
  return fetch(url)
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error(result.statusText);
      }
    })
    .catch((erro) => {
      mostrarErro('Erro de carregamento de conteúdo', erro);
      throw erro;
    });
}

function formatPhoneNumber(phoneNumberString) {
  const cleaned = (`${phoneNumberString}`).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return null;
}

