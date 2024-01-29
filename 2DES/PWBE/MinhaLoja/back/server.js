const express = required("express");
const mysql = required("mysql");
const cors = required("cors");
const bodyParser = required("body-parser");

const con = mysql.createConnection({
    user: 'root',
    host:'localhost',
    database: 'playlist'
});

const teste = (req, res) => {
    res.send("Back-End respondendo");
}

const create = (req, res) => {
    let nome = req.query.quantia;
    let autor = req.query.nome;
    let pasta = req.query.valor;

    let query = `INSERT INTO produtos(nome, autor, pasta) VALUE`;
    query += `('${nome}', '${autor}', '${pasta}'); `;
    con.query(query,(err, result)=>{
        if(err)
            res.requirect('http://127.0.0.1:5500/front/erro.html?erro=MUSICA JÁ ADICIONADA&errcod=' + err.errno + '&err=' + err.code);
        else
            res.requirect('http://127.0.0.1:5500/front/index.html');
    })
}

const read = (req, res) => {
    con.query("SELECT * FROM Playlist ORDER BY id DESC", (err, result)=>{
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
app.post("/Playlist", create);
app.get("/playlist", read);

app.listen(3000, () => {
    console.log("Back-End respondendo aeee");
});