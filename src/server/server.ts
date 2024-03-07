import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('Tá funcionando');
});

export { server };