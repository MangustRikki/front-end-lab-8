let answer = confirm("Do you want to play a game?");

let game = {
        min: 0,
        max: 5,
        prize: 10,
        guess: "",
        secretNum: "",
        attempts: 3,
        winPrize: 0
};



while (answer) {
    game.secretNum = Math.floor(Math.random() * (game.max - game.min)) + game.min;
    while (game.attempts > 0) {
        game.guess = prompt(` Enter a number from ${game.min} to ${game.max} \n Attempts left: ${game.attempts} \n Total prize: ${game.winPrize} \n Possibly prize on current attempt: ${game.prize}`, "");        

    if (game.guess == game.secretNum) {
        game.attempts = 3;
        game.winPrize += game.prize;
    }


}

}

console.log("You did not become a millionaire");