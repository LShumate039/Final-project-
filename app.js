var _lighting= "pokemon"; 
var _rat = "pikachu";

fetch(`https://pokeapi.co/api/v2/${_lighting}/${_rat}`)
.then( res => res.json())
.then( data => {
    // console.log(data.sprites)
    const{...img} = data.sprites; 
    //console.log(img)
    selector = document.querySelector('.class2');
    pokeIMG = `
| | img.card-img-top(src=&apos;${img.front_default}&apos;)
| | .card-body
| | h5.card-title Card title
| | p.card-text
| | | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
| | a.btn.btn-primary(href=&apos;#&apos;) Go somewhere


	`
    
    selector.innerHTML = pokeIMG; 

});