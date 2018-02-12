let answer = confirm("Do you want to play a game?");

let game = {
        min: 0,
        max: 5,
        prize: 10,
        guess: "",
        secretNum: "",
        attempts: 3,
        winPrize: 0,
};



while (answer) {
    game.secretNum = Math.floor(Math.random() * (game.max - game.min)) + game.min;
    let i = 1; // to divide price for each attempts
    while (game.attempts > 0) {
        
        game.guess = prompt(` Enter a number from ${game.min} to ${game.max} \n Attempts left: ${game.attempts} \n Total prize: ${game.winPrize} \n Possibly prize on current attempt: ${parseInt(game.prize/i)}`, "");        

    if (game.guess == game.secretNum) {
        let contGame = confirm("Do you want to continue the game?"); 
            if(contGame) {
                game.attempts = 3;
                game.winPrize += game.prize;
                game.max *= 2;
                game.prize *= 3;

                game.secretNum = Math.floor(Math.random() * (game.max - game.min)) + game.min;
            }

            else {
                
            }

        

        
    }


}

}

console.log("You did not become a millionaire");