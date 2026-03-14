// Nós começamos importando os requerimentos

// Este responsável por importar o framework da criação da API
const express = require("express");

//CORS faz o front-end acessar a API
const cors = require("cors");

//Importa a conexão do banco de dados (POOL)
const db = require("./src/db");

//Aqui é a aplicação do express
const app = express();

app.listen(10, () =>
    console.log("API ESTA RODANDO EM http://localhost:10")
); 
//Basicamente faz com que os outros arquivos façam requisições para a API 
app.use(cors());

//Ponte para que o express entenda as requisições
app.use(express.json());

//Listando usuários (GET)

app.get("/usuarios", async (req, res) => {
    try{
        //Aqui dentro vamos tentar executar o comando de lsitar do Banco de dados

        const [rows] = await db.query("select * from tbteste;");

        //Retorna oque recebeu em JSON
        res.json(rows);

    }  catch (err) {
        res.status(500).json({
            erro: "ERRO AO LISTAR OS USUÁRIOS",
            detalhe: err.message
        });
    }
});


//Método GET por um ID

//local par abuscar
app.get("/usuarios/:id", async (req, res) => {
    try{
        // os parâmetros são o id então 
        const {id} = req.params

        //Executar agora o comando
        const [rows] = await db.query ("SELECT * FROM tbteste where id = ?;", [id]);

        //Caso não encontre um valor o sistema retornará um erro

        if(rows.length === 0){
            return res.status(404).json({
                erro: "USUÁRIO NÃO ENCONTRADO"
            });
        }
        // caso encontrado ele envia em Json a resposta
        res.json(rows[0]);


    }catch(err){
        res.status(500).json({
            erro: "Erro ao buscar usuario",
            detalhe: err.message
        })
    }
});
//Método POST 

app.post("/usuarios", async (req, res) => {
    try{

        const {nome, email, contato, senha} = req.body;
        //Fazendo validação dos campos
        if(!nome || !contato){
            return res.status(400).json({
                erro: "NOME E CONTATO SÃO OBRIGATÓRIOS"
            });
        }

        //Vamos executar o inserir agora
        const [result] = await db.query("INSERT INTO tbteste (Nome, Email, Contato, Senha) VALUES (?,?,?,?);",
            [nome, email, contato, senha]);
            res.status(201).json({
                mensagem: "USUÁRIO CRIADO COM SUCESSO",
                id: result.insertId
            });
    }catch(err){
        res.status(500).json({
            erro: "Erro ao inserir usuário",
            detalhe: err.message
        })
    }
})

app.post("/produtos", async (req, res) => {
    try{

        const {produto, loot, estoque} = req.body;
        //Fazendo validação dos campos
        if(!produto || !loot){
            return res.status(400).json({
                erro: "PRODUTO E LOTE SÃO NECESSÁRIOS"
            });
        }

        //Vamos executar o inserir agora
        const [result] = await db.query("INSERT INTO tbproduto (Produto, Loot, Estoque) (?,?,?):",
            [produto, loot, estoque]);
            res.status(201).json({
                mensagem: "PRODUTO CRIADO COM SUCESSO",
                id: result.insertId
            });
    }catch(err){
        res.status(500).json({
            erro: "Erro ao inserir PRODUTO",
            detalhe: err.message
        })
    }
})

//Atualizar
app.put("/usuarios/:id", async (req, res)=>{
    try{
        const {id} = req.params;

        const {nome, contato } = req.body;

        if(!nome || !contato){
            return res.status(400).json({
                erro: "Nome e Contato obrigatórios"
            });
        }

        const [result] = await db.query("UPDATE tbteste SET id = ?, nome = ?, contato = ?;",
            [id, nome, contato]
        );

        if(result.affectedRows === 0){
            return res.status(404).json({
                erro: "Usuario não encontrado"
            });
        }
        res.json({
            message: "Usuario atualizado com sucesso"
        })
    }catch(err){
        res.status(500).json({
            erro: "erro ao atualizar usuario",
            detalhe: err.mensage
        })
    }
});

//Deletar
app.delete("usuarios/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const [result] = await db.query("DELETE from tbteste where id = ?", [id]);

        if(result.affectedRows === 0){
            return res.status(400).json({
                erro: "Usuario não encontrado para deletar"
            });
        }
        res.json({
            mensage: "Usuario deletado com sucesso"
        });
    }catch(err){
        res.status(500).json({
            erro: "erro ao deletar usuario",
            detalhe: err.mensage
        })
    }

})