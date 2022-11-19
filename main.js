const blocks=document.querySelectorAll('.block');
const playerText=document.getElementById('player');
const errorText = document.getElementById("error");


let player = 'X';
let gameOver = false;
let winner;


function startgame(){
    playerText.textContent = player;
};

blocks.forEach(block => block.addEventListener('click', () => chooseArena(block)))


function chooseArena(block){

    if(block.textContent === ''){

        block.textContent = player;

        if(block.textContent === 'O'){
            block.style.color = 'red'
        }
        turnplayer();
    }
        checkWin();
        checkTie();

    if (gameOver) {
        playerText.textContent = `Game is over, ${winner} Won`;
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }
}

function turnplayer(){

    if(player === 'X' ){
        player = 'O';
        playerText.textContent = player; 
        return
    }
    else if(player === 'O'){
        player = 'X';
        playerText.textContent = player;
    }
}

function checkTie() {

    const values = [];
    blocks.forEach(block => values.push(block.textContent))
    if (!values.includes("")) {
        playerText.textContent = "Tie !";
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }
}

function checkWin(){
    checkRows();
    checkColumns();
    checkDiagonals();
}

function checkRows(){
    let row1 = blocks[0].textContent == blocks[1].textContent &&
    blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""
    let row2 = blocks[3].textContent == blocks[4].textContent &&
    blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !== ""
    let row3 = blocks[6].textContent == blocks[7].textContent &&
    blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !== ""

    if (row1 || row2 || row3) {
    gameOver = true
}
    if (row1) return winner = blocks[0].textContent
    if (row2) return winner = blocks[3].textContent
    if (row3) return winner = blocks[6].textContent
}

function checkColumns(){
    let col1 = blocks[0].textContent == blocks[3].textContent &&
        blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== ""
    let col2 = blocks[1].textContent == blocks[4].textContent &&
        blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !== ""
    let col3 = blocks[2].textContent == blocks[5].textContent &&
        blocks[2].textContent == blocks[8].textContent && blocks[2].textContent !== ""

    if (col1 || col2 || col3) {
        gameOver = true
    }
    if (col1) return winner = blocks[0].textContent
    if (col2) return winner = blocks[1].textContent
    if (col3) return winner = blocks[2].textConte
}
function checkDiagonals(){
    let dia1 = blocks[0].textContent == blocks[4].textContent &&
    blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== ""
    let dia2 = blocks[2].textContent == blocks[4].textContent &&
    blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== ""

    if (dia1 || dia2) {
    gameOver = true
    }
    if (dia1) return winner = blocks[0].textContent
    if (dia2) return winner = blocks[2].textContent
}

function restart(){
    window.location.reload(false);
}
startgame();