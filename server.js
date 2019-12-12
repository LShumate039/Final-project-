

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

app.get('/', (req, res) => {
    res.render('index', {
      title: 'lennye', 
      
    })
});

app.get('/pokemon/:name', (req, res) => {

  // console.log(res.param.name); 	
});

app.get('/starwars/:characters ', (req, res) => {
  console.log('something2'); 	
});


//app.get('/app.js', (req, res) => res.render('about',{article:'about'}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
