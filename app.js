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
        const boardDiv = document.querySelector('#game-board');

    }

    const renderBoard = () => {
        const boardDiv = document.querySelector('#game-board');
        boardDiv.innerHTML = '';
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++){
                boardDiv.innerHTML += `
                    <div class="game-board-cell" data-col="${col}" data-row="${row}">
                        <p></p>
                    </div>
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

    console.log(board.boardArray);
 
    const toggleTurn = () => { };

    const playRound = () => {
        //get current player token
        let currentToken = currentPlayer.token;
        //Set token on board array
        //Update DOM board
        //Check for endgame
        //toggleTurn
     };
    ////EVENT LISTENER TAT GOES TO playRound/////
     
    board.renderBoard();
});

gameController();