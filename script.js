// I am declaring the tabs class that with a queryselector. The '.tab' is already classed in the HTML.
let tabs = document.querySelectorAll('.tab')
// The first player will be the 'X' in the game so I have to tell Java script that.
let player1 = 'X';
let gameOver = false;
let restartBtn  = document.getElementById('restartBtn');
let spaces = Array(9).fill(null);
let playerText = document.getElementById('PlayerText');

// To use the tabs on the I had to addevent listens so it will only work if the tabs are clicked.
// This also has a bit of the winning conditions and it will print when one of the players wins.
tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        if (gameOver || tab.textContent !== '') {
            return;
        }
        tab.textContent = player1;
// These are the winning quote
        if(checkWin()) {
            playerText.innerHTML = (`${player1} wins!`);
            gameOver = true;
            return;
        }

        if(checkTie()) {
            alert("Tie!");
            gameOver = true;
            return;
        }

        player1 = player1==='X'?'O':'X';
        // This is to make sure it switches between 'X' and 'O'.
    });
});
// These are the win conditions so it knows what the conditions are for a player to win. The fucntion is checkWin is always monitoring the game for specific patterns.
function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    
    ];

    return winConditions.some(condition=> {
        return condition.every(index=>{
            return tabs[index].textContent===player1;
        });
    });
}


function checkTie() {
    return Array.from(tabs).every(tab=> {
        return tab.textContent!=='';
    });
}

// This is the restart button it will reset everything when clicked.
restartBtn.addEventListener('click', restart)
// I am setting up the functions that will go in the button

function restart() {
    spaces.fill(null)
// This null part is to remove any items within the tabs.
    tabs.forEach( tab => {
        tab.innerText = ''
        tab.style.backgroundColor=''  
    })

    playerText.innerHTML = 'Tic Tac Toe'
    
}