function getComputerChoice () {
    let compChoice = Math.floor (Math.random() * 3);
    alert(compChoice)
    if (compChoice === 0) {
        let decision = ("BEE BOO BEE BOO GAMEBOT HAS SELECTED Rock")
        alert (decision)
    }
    else if (compChoice === 1) {
        let decision = ("BEE BOO BEE BOO GAMEBOT HAS SELECTED Paper") 
        alert (decision)
    }
    else if (compChoice === 2) {
        let decision = ("BEE BOO BEE BOO GAMEBOT HAS SELECTED Scissors")
        alert (decision)
    }

} 
//Computer choice generator is random as of break
function rockPaperScissors () {
    let playerChoice = (prompt("Rock, Paper or Scissors?"))
    let computerChoice = getComputerChoice()
    if (playerChoice === "Rock" && computerChoice === 0) {
        alert("Shoot! You both picked rock! Draw!")
    }
}
