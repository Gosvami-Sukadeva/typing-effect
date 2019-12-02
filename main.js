// const spnText = document.querySelector('.text');
// const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

// // Parametry
// let indexText = 0;
// const time = 40;

// // Implementacja
// const addLetter = () => {
//  spnText.textContent += txt[indexText];
//  indexText++;
//  if (indexText === txt.length) clearInterval(indexTyping);
// }
// const indexTyping = setInterval(addLetter, time);
const cursorLetter = document.querySelector('.cursor');
const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC';

// Parametry
const time = 40;
let indexText = 0;

// Implementacja
const addLeter = () => {

    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);

}
const cusrorAnimation = () => {
    cursorLetter.classList.toggle('active');
}

const indexTyping = setInterval(addLeter, time);
setInterval(cusrorAnimation, 500);