const tabs = document.querySelectorAll('.tab')
let player1 = 'X';
let gameOver = false;

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        if (gameOver || tab.textContent !== '') {
            return;
        }
        tab.textContent = player1;

        if(checkWin()) {
            alert(`${player1} wins!`);
            gameOver = true;
            return;
        }

        if(checkTie()) {
            alert("Tie!");
            gameOver = true;
            return;
        }

        player1 = player1==='X'?'O':'X';
    });
});

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