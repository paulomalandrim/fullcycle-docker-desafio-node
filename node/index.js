const express = require('express')
const app = express()
const port = 3000

//callDataBase()

app.get('/', (req,res) => {

    callDataBase(res)
})

app.listen(port, () =>{
    console.log('Rodando na porta ' + port)
})

function callDataBase(res) {
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    }    
    
    const mysql1 = require('mysql')
    const connection = mysql1.createConnection(config)
    const sqlInsert = "insert into people(name) values ('Paulo Malandrim')"
    connection.query(sqlInsert)
    connection.end

    const mysql2 = require('mysql')
    const pool = mysql2.createConnection(config)   
    const sql = "select * from people"
    var dados = " "
    pool.query(sql, function (err, result) {
        result.forEach(element => {
            dados += "<h2>" + element.name + "</h2>"
        })
        console.log('[QUERY] ' + dados);
        res.send('<h1>Full Cycle Rocks!</h1>' + dados)
    })
    pool.end
}
