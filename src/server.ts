import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({message: 'Marte'})
})

app.listen(3333, () => console.log('Server rodando na porta 3333'))