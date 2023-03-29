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
    })
})