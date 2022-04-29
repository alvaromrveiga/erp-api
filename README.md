<h1 align="center">ERP API</h1>

## 📑 Índice
<!--ts-->
   * [📌 Features](#-features)
   * [🔧 Instalação](#-instalação)
   * [🖇️ Requisições no Insomnia](#%EF%B8%8F-requisições-no-insomnia)
   * [💻 Tecnologias](#-tecnologias)
<!--te-->


## 📌 Features
- [x] Criação e leitura de Usuário
- [x] Autenticação de usuário
  - [x] JWT
- [x] Autorização de usuário
  - [x] Roles: ADMIN, HUMAN_RESOURCES, PROJECT_LEADER, COMMON
- [x] Criação e leitura de Departamentos
- [x] Criação, leitura e atualização de Tarefas


## 🔧 Instalação

1. Você precisará ter o [Node.js](https://nodejs.org/en/) instalado

2. Instalação

  ```bash
    # Clona o projeto para sua máquina
    git clone https://github.com/alvaromrveiga/erp-api

    # Entra na pasta do projeto
    cd erp-api

    # Instala as dependências
    yarn
  ```

3. Crie um arquivo .env na raiz do projeto preenchendo as informações descritas no [.env.example](https://github.com/alvaromrveiga/erp-api/blob/main/.env.example)

4. Iniciar servidor

  ```bash
    # Roda as migrations
    yarn migrate:dev 

    # Cria um usuário administrador para ter o acesso inicial às rotas protegidas da API
    # admin@example.com e senha a definir no .env
    yarn createAdmin

    # Inicia o servidor em modo de desenvolvimento
    yarn dev

    # O servidor abrirá por padrão na porta 3333

    # Para visualizar o banco de dados
    yarn prisma studio
  ```
  
## 🖇️ Requisições no Insomnia
A coleção de 9 requisições para testar o projeto no [Insomnia](https://insomnia.rest/download) pode ser encontrada [aqui](https://github.com/alvaromrveiga/erp-api/blob/main/assets/Insomnia_erp-api.json). 
  - Para importar no Insomnia:
    - Clique na engrenagem no canto superior direito
    - Aba de Data 
    - Import Data
    - From File
    - Selecione o arquivo Insomnia_erp-api.json dentro da pasta assets na raiz do projeto

![Insomnia requests](https://github.com/alvaromrveiga/erp-api/blob/main/assets/Insomnia_print_erp-api.png)


## 💻 Tecnologias
- [Node.js](https://nodejs.org/en/) e [Express](https://expressjs.com/) - construir o servidor
- [Typescript](https://www.typescriptlang.org/) e [ts-node-dev](https://github.com/wclr/ts-node-dev) - minimizar erros e tooling
- [Prisma](https://www.prisma.io/) com [PostgreSQL](https://www.postgresql.org/) - armazenar dados
- [CORS](https://github.com/expressjs/cors) - permitir acesso à API por outros domínios
- [Express async errors](https://github.com/davidbanham/express-async-errors) - lidar com erros assíncronos
- [Json Web Token](https://jwt.io/) - token de login
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - hashs de senhas
- [Class-validator](https://github.com/typestack/class-validator) e [class-transformer](https://github.com/typestack/class-transformer) - validações nos dados de entrada dos endpoints
- [Prisma-error-enum](https://github.com/vinpac/prisma-error-enum) - identificar os códigos para tratar as exceções do prisma
- [Dotenv-cli](https://github.com/entropitor/dotenv-cli) - carregar variáveis ambiente
