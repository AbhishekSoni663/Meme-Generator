let container = document.getElementById('newCont')
let img = document.getElementById('memeImg')
let card = document.getElementById('card')

let button = document.getElementById('generate')

let previewArray = []
let i = 0;
 button.addEventListener('click', memesGen)

 async function memesGen() {
  const response = await fetch("https://meme-api.com/gimme/wholesomememes");
  const data = await response.json();

  const memeUrl = data.url;

  img.src=memeUrl;
  img.style.display = "block";
  card.style.display = "block";
 }