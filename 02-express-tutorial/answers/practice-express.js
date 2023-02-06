const express = require('express');
const app = express();
const consoleLog = require('./practice-middleware.js');

app.use(consoleLog);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })



app.listen(3000);