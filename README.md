# Be mobile - Teste de Front-end

O teste de Front-end da Be mobile consiste em montar uma tabela com as informações que virão por uma API simulada escrita em json-server.
A tabela deve conter as seguintes colunas: imagem, nome, cargo, data de admissão e telefone,
com todos os dados devidamente formatados e apresentados como está no figma. Além disso,
deve ter a possibilidade de realizar uma pesquisa na tabela por um input. Obs:
[acesse aqui o figma do projeto](https://www.figma.com/file/y9qJNNAckFRL7LNoyNjpv8/Teste---Be-mobile).

![image](https://user-images.githubusercontent.com/42809136/127918010-79b5d883-df57-4c6d-8a2a-43e220d3c703.png)

## Condições

Deve-se utilizar React ou Vanilla JS (JavaScript puro). É permitido utilizar libs externas,
mas recomenda-se que seja o mínimo possível para que consigamos avaliar melhor o seu teste.

## Recursos usados
A interface do teste foi construída com as seguintes tecnologias:
1. React
2. CSS

## Critérios de Avaliação

Em ordem de relevância:

1. Lógica de programação
2. Organização (do código e dos arquivos)
3. CSS
4. README, que deve conter pelo menos as seguintes informações: Sobre, Pré-requisitos, Rodando a Aplicação.

## Pré-requisitos

Tenha instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/).

## Rodando a aplicação

Para iniciar o projeto, siga o passo a passo abaixo. Caso não tenha familiaridade com o [json-server](https://github.com/typicode/json-server):

1. Baixe este projeto em sua máquina e crie um repositório no Github baseado nele
2. Entre no projeto e execute os comandos abaixo

```bash
# Instalar as dependências
$ yarn

# Execute a aplicação através do comando "yarn dev", para rodar o seguinte comando:
$  "dev": "concurrently \"yarn start\" \"yarn start:server\""
```

3. Inicie a estrutura do seu projeto (seja em React ou Vanilla JS)

## Entrega

Entregue este projeto realizando um Pull Request para este repositório dentro do prazo combinado com o avaliador.
Em caso de dúvidas, contate-nos via e-mail.

## observações
concurrently é uma biblioteca que permite executar dois comandos "CLI" (command-line interface - CLI)  ao mesmo tempo, e assim, um terminal será aberto automaticamente, rodando os dois comandos. 
- yarn dev = vai execultar o "start": "set PORT=3010 && react-scripts start", que está configurado para rodar na porta 3010,  para não conflitar com o comando 
"start:server": "json-server --watch server.json", que vai rodar na porta 3000.

```bash
# Representação do bloco de scripts
 "scripts": {
    "start": "set PORT=3010 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "start:server": "json-server --watch server.json",
    "dev": "concurrently \"yarn start\" \"yarn start:server\""
  },
 ```
