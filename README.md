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

## ▶️ Como executar

### 1. Instalar as dependências

```bash
npm install
```

### 2. Configurar o banco

A conexão está configurada para um MySQL local. Antes de executar, ajuste as configurações do arquivo de conexão conforme o seu ambiente e crie as tabelas necessárias no banco.

### 3. Iniciar a API

```bash
npm start
```

Durante o desenvolvimento, também é possível usar:

```bash
npm run dev
```

A aplicação atual utiliza a porta `10`.

### 4. Abrir o frontend

Abra o arquivo `index.html` no navegador. O JavaScript do frontend faz requisições para:

```text
http://localhost:10
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

## ⚠️ Estado do projeto

Este é um projeto de estudo e ainda possui pontos que podem ser melhorados antes de ser considerado pronto para produção. Entre eles estão validações, segurança das senhas, organização do código e alguns ajustes nas consultas/rotas.

## 🔧 Melhorias futuras

- Separar rotas, controllers e serviços
- Utilizar variáveis de ambiente para configuração do banco
- Implementar hash de senhas
- Melhorar validação dos dados recebidos
- Corrigir e testar completamente as rotas de atualização e exclusão
- Adicionar testes automatizados
- Documentar a API com Swagger/OpenAPI

---

Desenvolvido por [Gabriel3749](https://github.com/Gabriel3749).