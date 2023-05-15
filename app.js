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
            document.querySelector('#player-one-card').classList.toggle('active');
            document.querySelector('#player-two-card').classList.toggle('active');
        }else{
            currentPlayer = playerTwo;
            document.querySelector('#player-one-card').classList.toggle('active');
            document.querySelector('#player-two-card').classList.toggle('active');
        }
     };

     const checkForEndgame = () => {
        console.log(board.boardArray);
        //Check for 3 tokens on  a row
            for(let row = 0; row < 3; row++){
                //Check row
                if(board.boardArray[row][0] != 0 && board.boardArray[row][1] != 0 && board.boardArray[row][2] != 0){
                    if(board.boardArray[row][0] == board.boardArray[row][1] && board.boardArray[row][0] == board.boardArray[row][2]){
                        console.log('winner on row' + board.boardArray[row][0]);
                    }   
                }
                //Check col
                for(let col = 0; col < 3; col++){
                    if(board.boardArray[0][col] != 0 && board.boardArray[0][col] != 0 && board.boardArray[0][col] != 0){
                        if(board.boardArray[0][col] == board.boardArray[1][col] && board.boardArray[0][col] == board.boardArray[2][col]){
                            console.log('winner on col' + board.boardArray[col][0]);
                        }   
                    }
                }
            }

        //Check for diagonal
        if(board.boardArray[0][0] != 0 && board.boardArray[1][1] != 0 && board.boardArray[2][2] != 0){     
            if(board.boardArray[0][0] == board.boardArray[1][1]  && board.boardArray[0][0] == board.boardArray[2][2]){
                console.log('winner on col' + board.boardArray[0][0]);
            }   
        }

        if(board.boardArray[0][2] != 0 && board.boardArray[1][1] != 0 && board.boardArray[2][0] != 0){     
            if(board.boardArray[0][2] == board.boardArray[1][1]  && board.boardArray[0][2] == board.boardArray[2][0]){
                console.log('winner on col' + board.boardArray[0][2]);
            }   
        }

        //If board is full
     }

    const playRound = (clickedCell) => {
        setToken(currentPlayer.token, clickedCell); //Add token to board array
        board.renderBoard(board.boardArray); //Render new board
        checkForEndgame();//Check for winners
        toggleTurn();//Toggle turn
     };

    //Click on empty cell
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