function getComputerChoice () {
    let compChoice = Math.floor (Math.random() * 3);
    if (compChoice === 0) {
        let decision = ("Rock")
        return (decision)
    }
    else if (compChoice === 1) {
        let decision = ("Paper") 
        return (decision)
    }
    else if (compChoice === 2) {
        let decision = ("Scissors")
        return (decision)
    }

} 

function rockPaperScissors () {
    const playerChoice = (prompt("Rock, Paper or Scissors?"))
    const computerChoice = getComputerChoice()
    alert (computerChoice)
    if (playerChoice === "Rock" && computerChoice === "Rock") {
        alert("Shoot! You both picked rock! Draw!")
    }
    else if (playerChoice ==="Rock" && computerChoice === "Scissors") {
        alert("Rock crushes the enemy! VICTORY!")
    }
    else if (playerChoice ==="Rock" && computerChoice === "Paper") {
        alert("It's paper! We are defeated!")
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        alert("Rock! Noooooooo")
    }
    else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        alert("Another Scissors! TIE!")
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        alert("Scissors slices Paper! VICTORY!")
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        alert("Die Rock! VICTORY!")
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        alert("It's Scissors! Noooooo!")
    }
    else if (playerChoice === "Paper" && computerChoice === "Paper") {
        alert("Finally, a worthy opponent! Our battle shall be legendary!")
    }
}


//Computer choice generator is random as of break
// computerChoice cannot read result from getComputerChoice apparently, or at least the 
//number part of it. Decision not defined there either. - Fixed, was trying to match a 
//number with a string.