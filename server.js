

const express = require('express');
const fetch = require('node-fetch');
const app = express()
var path = require('path');
const port = 4000;
app.set("view engine", "pug")
app.set("views" , 'views');

/**
 *  Explain the difference between res.send & res.render
  */ 
// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req, res) => res.render('index'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

