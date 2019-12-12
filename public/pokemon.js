
function get(){

  fetch(`https://pokeapi.co/api/v2/${_lighting}/${_rat}`)
  .then( res => res.json())
  .then( data => {
      // console.log(data.sprites)
      const{...img} = data.sprites; 
      //console.log(img)
      selector = document.querySelector('.class2');
      pokeIMG = `img.card-img-top(src='${img.front_default}')
      .card-body
      h5.card-title Card title
      p.card-text
      | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
      a.btn.btn-primary(href='#') Go somewhere`
      
      selector.innerHTML = pokeIMG; 
  
  });
}

get();




app.get('/:id', async (req, res) => {
  try {
      const URI = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;
      const pokemonData = await fetch(URI);
      const json = await pokemonData.json();
      console.log(json);
      const pokeName = await json.name;
      const pokeImg = await json.sprites.back_default;
      console.log(pokeImg);
  
       await res.render('index', {
           name: pokeName,
           img: pokeImg
       });
  } catch (error) {
      console.log(error);
  }
       
});




