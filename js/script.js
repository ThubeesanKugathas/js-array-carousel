// numero di array per contenuto: 3

// array per il titolo
const arrayTitles = ['Title1', 'Title2', 'Title3', 'Title4'];
// array per il contenuto 
const arrayContents = ['Content1', 'Content2', 'Content3', 'Content4'];
// array per le immagini


// current index counter 
let currentIndex = 0;

// definire zona titolo
const title = document.querySelector('.ms_title');

// definire zona contenuti
const content = document.querySelector('.ms_content');

// creare due button per next ed prev 
const buttonNext = document.querySelector('.ms_button-next');
const buttonPrev = document.querySelector('.ms_button-prev');

buttonNext.addEventListener('click', function() {
    currentIndex++;

})