import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello Felp' })
}) 

app.get('/teste', (request, response) => {
    return response.json({ message: 'Hello Felp2' })
})

app.listen(3333);