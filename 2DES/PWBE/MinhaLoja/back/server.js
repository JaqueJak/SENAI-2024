const express = required("express");
const mysql = required("mysql");
const cors = required("cors");
const bodyParser = required("body-parser");

const con = mysql.createConnection({
    user: 'root',
    host:'localhost',
    database: 'papelaria'
});

const teste = (req, res) => {
    res.send("Back-End respondendo");
}

const create = (req, res) => {
    let produto = req.query.produto;
    let estoque = req.query.estoque;
    let valor = req.query.valor;

    let query = `INSERT INTO produtos(nome, autor, pasta) VALUE`;
    query += `('${produto}', '${estoque}', '${valor}'); `;
    con.query(query,(err, result)=>{
        if(err)
            res.requirect('http://127.0.0.1:5500/front/erro.html?erro=PRODUTO JÁ CADASTRADO&errcod=' + err.errno + '&err=' + err.code);
        else
            res.requirect('http://127.0.0.1:5500/front/index.html');
    })
}

const read = (req, res) => {
    con.query("SELECT * FROM Papelaria ORDER BY id DESC", (err, result)=>{
        if(err)
            res.json(err);
        else 
            res.json(result);
    });
}

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", teste);
app.post("/Papelaria", create);
app.get("/papelaria", read);

app.listen(3000, () => {
    console.log("Back-End respondendo aeee");
});