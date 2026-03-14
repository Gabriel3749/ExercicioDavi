//Aqui vou começar a fazer a ligação do banco

// Importa a biblioteca mysql2
const mysql = require("mysql2/promise")

//pool
const pool = mysql.createPool({
 
    //Local do banco de dados
    host: "localhost",

    //Usuário padrão
    user: "root",

    //Senha
    password: "",

    //Nosso banco de dados
    database: "bddaviexer", 
    //Aqui ele espera liberar as conexões ao invés de aparecer algum erro
    waitForConnections: true,

    //Max de conexões
    connectionLimit: 10,

    //Limite de requisições
    queueLimit: 0
});

module.exports = pool;