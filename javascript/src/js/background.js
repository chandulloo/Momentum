const body = document.querySelector("body");
const img = Math.floor(Math.random() * 4);
body.style.backgroundImage = `url("../javascript/src/img/${img}.jpg")`;
console.log(img);
