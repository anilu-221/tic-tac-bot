/**
 * Gameboard
 */
const gameBoard = (() => {
    const boardArray = [];
    for (let row = 0; row < 3; row++) {
        boardArray[row] = [];
        for (let col = 0; col < 3; col++){
            boardArray[row][col] = 0;
        }
    }

    const renderBoard = (boardArray) => {
        const boardButton = document.querySelector('#game-board');
        boardButton.innerHTML = '';

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++){
                let cellValue = '';
                if(boardArray[row][col] != 0){
                    cellValue = boardArray[row][col];
                }
                boardButton.innerHTML += `
                    <button class="game-board-cell" data-col="${col}" data-row="${row}">
                        ${cellValue}
                    </button>
                `;
            }
        }
    }
    const cleanBoard = () => {
        console.log('clean board');
    }
    return{boardArray, renderBoard, cleanBoard}
});

/**
 * Players
 */
const PlayerController= (name, token) => {
    const getName = () => name;
    const getToken = () => token;
    return {name, token};
}

/**
 * Game Controller
 */
const gameController = (() => {
    const playerOne = PlayerController('David Bowie', 'X');
    const playerTwo = PlayerController('Ziggy Stardust', 'O');
    const board = gameBoard();
    let currentPlayer = playerOne;

    const setToken = (token, clickedCell) => {
        board.boardArray[clickedCell.dataset.row][clickedCell.dataset.col] = token;
    }
 
    const toggleTurn = () => {
        if(currentPlayer == playerTwo){
            currentPlayer = playerOne;
        }else{
            currentPlayer = playerTwo;
        }
     };

     const checkForEndgame = () => {
        console.log(board.boardArray);
        //Check for 3 tokens on row

        //Check for 3 tokens on col

        //Check for diagonal

        //If board is full
     }

    const playRound = (clickedCell) => {
        setToken(currentPlayer.token, clickedCell);
        board.renderBoard(board.boardArray);

        //Check for endgame
        checkForEndgame();

        toggleTurn();
     };
    ////EVENT LISTENER TAT GOES TO playRound/////
    document.querySelector('#game-board').addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('game-board-cell')){
            console.log(e.target.innerText);
            if(e.target.innerText == 'X' || e.target.innerText == 'O'){
                return;
            }
            playRound(e.target);
        }
    });
     
    board.renderBoard(board.boardArray);
});

gameController();