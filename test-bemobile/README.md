# Tabela de funcionário 
A aplicação consite em uma tabela que recebe uma requisação com os dados dos funcionário da empresa, nos quais consiste: foto, nome, cargo, data de admissão e telefone. É possivel encontrar o funcionário por qualquer uma das propriedades no campo de pesquisa (excluindo a foto).

![alt text](https://i.imgur.com/bMM8OGW.png)

## Pré-requisitos
Tenha instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/).

## Rodando a aplicação
Para iniciar o projeto, siga o passo a passo abaixo. Caso não tenha familiaridade com o [json-server](https://github.com/typicode/json-server):
1. Baixe o [projeto](https://github.com/LukaVieira1/front-table) em sua máquina e crie um repositório no Github baseado nele
2. Dentro da pasta "front-table" execute os seguintes passos
```bash
# Instalar as dependências
$ yarn
# Executar o json-server
$ yarn json-server --watch server.json
```
3. Entre na pasta "test-bemobile" e instale as dependências do projeto.
```bash
# Instalar as dependências
$ yarn
```
4. Crie na raiz da pasta "test-mobile" um .env-local e adicione uma variável de ambiente "REACT_APP_API_URL" que irá conter o link para a api. Nesse projeto utiliza-se "REACT_APP_API_URL=http://localhost:3000"
5. Execute o projeto em uma porta diferente da 3000, pois ela já vai estar em uso (caso você esteja executando o vscode, na hora de executar, ele vai perguntar se você quer rodar o projeto em outra porta)
```bash
# Executando o projeto
$ yarn start
```
