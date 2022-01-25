<h1 align='center'>Projeto front-table Bee-mobile em VanillaJS</h1>

  <p>Projeto de Frontend, para o teste da Be-mobile, feito com ReactJS, usando Hooks, components, styled components para estilização, e routes para simular uma aplicação, somente rota home("/").</p>

<h3>Pré requisitos</h3>

  <p>
    <span>Ter instalado em sua máquina as seguintes ferramentas: </span>
    <span><a href="https://git-scm.com/">Git</a></span>, 
    <span><a href="https://nodejs.org/en/">NodeJS</a></span><span> e </span> 
    <span><a href="https://yarnpkg.com/">Yarn</a></span>. 
  </p>
  

<h3>Instalação das dependências e iniciar a aplicação</h3>

  <p>Primeiramente realizar o clone deste repositório.</p>

  <p>Para iniciar o projeto, primeiro é necessário instalar as dependências, abrindo o terminal no diretório da aplicação(fe-reactjs/) e executar o comando:</p>

  <code>yarn</code>

  <p>Após instalação das dependências, no terminal aberto no mesmo diretório, para iniciar a API de teste que será usada para a requisição da lista de funcionários, iniciar o script:</p>

  <code>yarn json-server --watch server.json --port 4000</code>

  <p>A API por curiosidade vai rodar em: 'http://localhost:4000/employess'.</p>

  <p>Após a inicialização da API, ainda no mesmo diretório, abrir um novo terminal sem fechar o anterior, e iniciar o script:</p>

  <code>yarn start</code>

  <p>A aplicação vai rodar automaticamente em: 'http://localhost:3000/'.</p>

<h3>Funcionalidades</h3>

  <p>Listagem dos funcionários vindo da API.</p>
  <p>Input de 'Pesquisar' poderá ser usado para buscar por nome, cargo ou data de admissão.</p>

<h4>🛠 Tecnologias</h4>

As seguintes ferramentas foram usadas na construção do projeto:

<img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' />
<img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' />
