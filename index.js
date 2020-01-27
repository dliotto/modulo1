const express = require('express');

const server = express();

//query params = ?teste=1
//route params = /users/1
//request body = { "nome" : "Douglas", "data_nas" : "25/01/1992" } 

server.get('/users/:id', (req, res) => {

    const nome = req.query.nome;
    const id = req.params.id;

    return res.json({ message: `Olá id: ${id} do nome ${nome}` });
});


server.listen(3000);