//Dependencias - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//Conexão
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'lojinha'
})

//Rota de teste
const teste = (req, res) =>{
    res.send("Back-End respondendo ");
}

//CRUD - Read
const read = (req, res) =>{
    con.query("SELECT * FROM Clientes", (err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });

    res.json("bicho-homem");
}

//Configurações de saida - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());

//Rota de saida - FrontEnd
app.get("/", teste);
app.get("/Clientes", read);

app.listen(3000,()=>{
    console.log("Back-End respondendo na porta 3000");
});