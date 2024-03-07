import { server } from './server/server';

const PORT = 3333;

server.listen(PORT, () => {
    console.log('Server rodando no http://localhost:' + PORT);
});
