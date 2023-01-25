const express = require('express');
const app =express();
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './new-public/index.html'));
});

app.get('/sample', (req, res) => {
    res.send('This is working');
});

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })


const PUERTO =process.env.PORT || 3000;

app.listen(PUERTO,()=> {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}... `)
});