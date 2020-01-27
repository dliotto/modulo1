const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
    return res.json({ message: 'Olá Mundo' });
});


server.listen(3000);