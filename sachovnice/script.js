
const ROWS = 10;
const COLS = 10;
const boardEl = document.getElementById('board');
const resetBtn = document.getElementById('resetBtn');
const colorPicker = document.getElementById('colorPicker');



function buildBoard(){
boardEl.innerHTML = '';
for(let r = 0; r < ROWS; r++){
for(let c = 0; c < COLS; c++){
const sq = document.createElement('div');
sq.classList.add('square');

const isLight = (r + c) % 2 === 0;
sq.classList.add(isLight ? 'light' : 'dark');



sq.setAttribute('data-row', r);
sq.setAttribute('data-col', c);
sq.setAttribute('role', 'gridcell');
sq.setAttribute('tabindex', '0'); 


sq.addEventListener('click', () => toggleSquare(sq));



sq.addEventListener('keydown', (e) => {
if(e.key === 'Enter' || e.key === ' '){
e.preventDefault();
toggleSquare(sq);
}
});


boardEl.appendChild(sq);
}
}
}


function toggleSquare(sq){
const wasActive = sq.classList.toggle('active');

}



function resetBoard(){
const squares = boardEl.querySelectorAll('.square.active');
squares.forEach(sq => sq.classList.remove('active'));
}



function updateHighlightColor(hex){
document.documentElement.style.setProperty('--highlight-color', hex);
}


resetBtn.addEventListener('click', resetBoard);
colorPicker.addEventListener('input', (e) => updateHighlightColor(e.target.value));

buildBoard();
updateHighlightColor(colorPicker.value);