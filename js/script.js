// numero di array per contenuto: 3

// array per il titolo

const arrayTitles = [
    'Calcio',
    'Tennis',
    'Pallacanestro',
    'Pallavolo'
];
// array per il contenuto 
const arrayContents = [
    'Il calcio è uno sport di squadra giocato all\'aperto con un pallone su un campo di gioco rettangolare, con due porte. È giocato da due squadre composte da 11 giocatori', 
    'Il tennis è uno sport della racchetta che vede opposti due o quattro giocatori in un campo da gioco diviso in due metà da una rete alta 0,914 m al centro e 1,07 m ai lati.', 
    'La pallacanestro, conosciuta anche come basket, è uno sport di squadra in cui due formazioni di cinque giocatori ciascuna si affrontano per segnare con un pallone nel canestro avversario, secondo tante regole prefissate e con un punteggio che varia dalla posizione di tiro.', 
    'La pallavolo è uno sport di squadra, che si svolge tra due squadre con in campo sei giocatori, ed altri sei in panchina per ognuna delle squadre. Lo scopo del gioco è realizzare punti, facendo in modo che la palla tocchi terra nel campo avversario, e impedire che la squadra avversaria possa fare altrettanto.'
];
// array per le immagini

// current index counter 
let currentIndex = 0;

// definire zona titolo
const title = document.querySelector('.ms_title');


// definire zona contenuti
const content = document.querySelector('.ms_content');

title.innerHTML = arrayTitles[currentIndex];
content.innerHTML = arrayContents[currentIndex];


// creare due button per next ed prev 
const buttonNext = document.querySelector('.ms_button-next');
const buttonPrev = document.querySelector('.ms_button-prev');

buttonNext.addEventListener('click', function() {
    currentIndex++; 

    if (currentIndex > arrayTitles.length - 1) {
        currentIndex = 0;
    }

    if (currentIndex > arrayContents.length - 1) {
        currentIndex = 0;
    }

    title.innerHTML = arrayTitles[currentIndex];
    content.innerHTML = arrayContents[currentIndex];    

})

buttonPrev.addEventListener('click', function() {
    currentIndex--; 

    if (currentIndex < 0) {
        currentIndex = arrayTitles.length - 1;
    }

    if (currentIndex < 0) {
        currentIndex = arrayContents.length - 1;
    }

    title.innerHTML = arrayTitles[currentIndex];
    content.innerHTML = arrayContents[currentIndex];    

})

