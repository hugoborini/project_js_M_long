$body = document.querySelector("body");

const printf = message => message;

const helloWord = printf("Hello word");

const title = `<div class="title-container"><h1 class="title">${helloWord}</h1></div>`;

$body.innerHTML += title;
