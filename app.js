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
    const printCell = () => {
        const boardButton = document.querySelector('#game-board');

    }

    const renderBoard = (boardArray) => {
        const boardButton = document.querySelector('#game-board');
       // let cellValue = '0';
        boardButton.innerHTML = '';

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++){
                let cellValue = boardArray[row][col];
                if(boardArray[row][col] != 0){
                    cellValue = boardArray[row][col];
                }
                boardButton.innerHTML += `
                    <button class="game-board-cell" data-col="${col}" data-row="${row}">
                        ${boardArray[row][col]}
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
    let currentPlayer = playerOne;

    //Creates board
    const board = gameBoard();

    const setToken = (token, clickedCell) => {
        board.boardArray[clickedCell.dataset.row][clickedCell.dataset.col] = token;
        console.log(board.boardArray);
    }
 
    const toggleTurn = () => { };

    const playRound = (clickedCell) => {
        
        setToken(currentPlayer.token, clickedCell);
        board.renderBoard(board.boardArray);
        //Update DOM board
        //Check for endgame
        //toggleTurn
     };
    ////EVENT LISTENER TAT GOES TO playRound/////
    document.querySelector('#game-board').addEventListener('click', (e) => {
        console.log(e.target);
        if(e.target && e.target.classList.contains('game-board-cell')){
            playRound(e.target);
        }
    });
     
    board.renderBoard(board.boardArray);
});

gameController();