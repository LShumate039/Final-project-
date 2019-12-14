
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







