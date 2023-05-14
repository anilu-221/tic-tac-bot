/**
 * Gameboard
 */
const gameBoard = (() => {
    //Create board and return it

    const renderBoard = () => {

    }
    const cleanBoard = () => {

    }
});

/**
 * Players
 */
const Player = (name, token) => {
    const getName = () => name;
    const getToken = () => token;
    return {name, token};
}

/**
 * Game Controller
 */
const gameController = (() => {
    const playerOne = Player('David Bowie', 'X');
    const playerTwo = Player('Ziggy Stardust', 'O');
    const board = gameBoard();

    const toggleTurn = () => { };

    const playRound = () => {
        //get current player
        //get player token
        //Set token on board array
        //Update DOM board
        //Check for endgame
        //toggleTurn
     };
    ////EVENT LISTENER TAT GOES TO playRound/////

    board.renderBoard();
});

gameController();