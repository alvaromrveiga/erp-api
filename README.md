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

    # Inicia o servidor em modo de desenvolvimento
    yarn dev

    # O servidor abrirá por padrão na porta 3333

    # Para visualizar o banco de dados
    yarn prisma studio
  ```
