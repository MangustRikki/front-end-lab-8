let newGame = confirm("Do you want to play a game?");

let game = {};

while (newGame) {
    game = {
        min: 0,
        max: 5,
        prize: 10,
        guess: "",
        secretNum: "",
        attempts: 3,
        winPrize: 0,
    };
    game.secretNum = Math.floor(Math.random() * (game.max - game.min)) + game.min;
    console.log(game.secretNum);
    let i = 1; // to divide price for each attempts

    while (game.attempts > 0) {

        game.guess = prompt(` Enter a number from ${game.min} to ${game.max} \n Attempts left: ${game.attempts} \n Total prize: ${game.winPrize}$ \n Possibly prize on current attempt: ${game.prize}$`, "");

        if ((game.guess^0) === game.secretNum && !isNaN(parseFloat(game.guess))) {
            let contGame = confirm("Do you want to continue the game?");
            if (contGame) {
                game.attempts = 3;
                game.winPrize += game.prize;
                game.max *= 2;
                game.prize *= 3;

                game.secretNum = Math.floor(Math.random() * (game.max - game.min)) + game.min;
            } else {
                game.winPrize += game.prize;
                console.log(`Thank you for a game. Your prize is: ${game.winPrize}$`);

                newGame = confirm("Do you want to play again?");
            }

        } else {
            game.attempts -= 1;
            game.prize = parseInt(game.prize / i);
        }
        i = 2; //to divide prize
    }
    newGame = confirm("Do you want to play again?");

}

console.log("You did not become a millionaire");