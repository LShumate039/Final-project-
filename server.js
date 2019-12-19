

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

// app.get('/', (req, res) => {
//     res.render('index', {
//       title: 'lennye', 
      
//     })
// });

//app.get('/pokemon/:name', (req, res) => {

  // console.log(res.param.name); 	
//});

//app.get('/starwars/:characters ', (req, res) => {
  //console.log('something2'); 	
//});


// app.get("/", (req, res, next) => {
//   let url = "localhost:4000"
//   res.render("index", {
//     title: "Home"
//   });
//   });
  

// app.get("/starwars", (req, res, next) => {
//   let url = "localhost:4000"
//   res.render("starwars", {url:url});
//   });

//   app.get("/pokemon", (req, res, next) => {
//     let url = "localhost:4000";
//     res.render("pokemon", {url:url});
//     });

    app.get("/starwars", (req, res) => {
      fetch("https://swapi.co/api/people/1/")
        .then(res => res.json())
        .then(json => {
          console.log(json);
          res.render("starwars", {
            people: json
          });
        });
    });
    

    app.get("/pokemon", (req, res) => {
      fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
        .then(res => res.json())
        .then(json => {
          console.log(json);
          res.render("pokemon", {
            poke: json
          });
        });
    });
    
    
var _condition = "pokemon"; 
var _pocketmonster = "gyarados";

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then( data => {
    // console.log(data.sprites)
    const{...img} = data.sprites; 
    //console.log(img)
    selector = document.querySelector('.card');
    pokeIMG = ` img.card-img-top(src='${img.front_default}')
    .card-body
      h5.card-title Card title
      p.card-text
        | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
      a.btn.btn-primary(href='#') Go somewhere
    `
    
    selector.innerHTML = pokeIMG; 

});
    


//app.get('/app.js', (req, res) => res.render('about',{article:'about'}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
