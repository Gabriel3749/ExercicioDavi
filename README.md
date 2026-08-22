# 👥 API CRUD de Usuários

Projeto de estudo com **frontend em HTML/CSS/JavaScript** e uma **API REST em Node.js com Express**, integrada a um banco de dados MySQL.

O projeto foi criado para praticar operações de cadastro, listagem, consulta por ID, atualização e exclusão de usuários, além da comunicação entre frontend, backend e banco de dados.

## 🚀 Tecnologias

### Backend

- Node.js
- Express
- MySQL
- mysql2
- CORS
- Nodemon

### Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API

## 📌 Funcionalidades

- Cadastrar usuários
- Listar todos os usuários
- Buscar usuário por ID
- Atualizar dados de usuário
- Excluir usuário
- Respostas da API em JSON
- Integração do frontend com a API usando `fetch`
- Conexão com MySQL utilizando pool de conexões

## 🔗 Rotas principais

```text
GET    /usuarios
GET    /usuarios/:id
POST   /usuarios
PUT    /usuarios/:id
DELETE /usuarios/:id
```

O projeto também contém uma rota experimental para cadastro de produtos.

## 📁 Estrutura principal

```text
ExercicioDavi/
├── index.html
├── script.js
├── style.css
├── index.js
├── db.js
├── package.json
└── README.md
```

## 🧠 Conceitos praticados

- Criação de API REST
- Métodos HTTP: GET, POST, PUT e DELETE
- Rotas com parâmetros
- Programação assíncrona com `async/await`
- Tratamento de erros com `try/catch`
- Integração entre frontend e backend
- Requisições HTTP com Fetch API
- Queries parametrizadas no MySQL
- Pool de conexões

## 📚 Contexto

Este repositório representa um projeto de estudo utilizado para praticar conceitos de desenvolvimento web, integração com banco de dados e construção de APIs.

---

Desenvolvido por [Gabriel3749](https://github.com/Gabriel3749).