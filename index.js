const express = require('express');

const server = express();

server.use(express.json());

//query params = ?teste=1
//route params = /users/1
//request body = { "nome" : "Douglas", "data_nas" : "25/01/1992" } 

const arrayUsuarios = ['Douglas', 'Manu', 'Jacqueline', 'Jhou'];

server.use((req, res, next) =>{
    console.time('Request');
    console.log(`Método: ${req.method} URL: ${req.url}`);

    next();

    console.timeEnd('Request');
});

function usuarioExiste(req, res, next){
    if(!req.body.nome){
        return res.status(400).json({ "error" : "Nome do usuário é necessário" });
    }

    return next();
}

function verificarUsuarioArray(req, res, next){

    const user = arrayUsuarios[req.params.index];

    if(!user){
        return res.status(400).json({ "error" : "Usuário inexistente" });
    }

    req.user = user;

    return next();
}

server.post('/users', usuarioExiste, (req, res) => {
    const { nome } = req.body;

    arrayUsuarios.push(nome);

    return res.json(arrayUsuarios);
});

server.put('/users/:index', usuarioExiste, verificarUsuarioArray, (req, res) => {
    const { nome } = req.body;
    const { index } = req.params;
    
    arrayUsuarios[index] = nome;

    return res.json(arrayUsuarios);
});

server.delete('/users/:index', verificarUsuarioArray, (req, res) => {
    const { index } = req.params;
    
    arrayUsuarios.splice(index, 1)

    return res.json(arrayUsuarios);
});

server.get('/users', (req, res) => {
    return res.json(arrayUsuarios);
});

server.get('/usersArr/:index', verificarUsuarioArray, (req, res) => {

    const { index } = req.params;

    return res.json({ message: `Olá ${req.user}` });
});

server.get('/user/:id', (req, res) => {

    const nome = req.query.nome;
    const id = req.params.id;

    return res.json({ message: `Diga: Olá id: ${id} do nome ${nome}` });
});


server.listen(3000);