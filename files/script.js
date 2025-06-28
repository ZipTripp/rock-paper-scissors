//score container 
const score = document.querySelectorAll('.score')
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
//btn-section
const btnSection = document.querySelector('.options-container')
//btn-container
const primeBtn = document.querySelectorAll('.btn')
const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorBtn = document.getElementById('scissors-btn')
const resetGame = document.getElementById('reset-game-btn')
//results-container
const resultMsg = document.getElementById('results-msg')
const winnerMsg = document.getElementById('winner-msg')

// ********arror function has not this property ********
// primeBtn.forEach(item => {
//     item.addEventListener('click', ()=>{
//         // console.log(this.innerText)
//         console.log("clicked" , this.name)
//         console.log("clicked", this.value)
//     })
// })
//****************************************************

/* ✅
primeBtn.forEach(item => {
    item.addEventListener('click', function() {
        console.log("clicked name:", this.name)
        console.log("clicked value:", this.value)
        console.log("clicked innertext", this.innerText)
        
    })
})
*/

function randomChoose(){
    const options = ['Rock', 'Paper', 'Scissors']
    const num = Math.floor(Math.random()*3)
    return options[num]
}

function points(myChoice, computerChoice){
    let myPoint = 0
    let computerPoint = 0
    if (myChoice === computerChoice){
        return [myPoint, computerPoint]
    } else if (myChoice=='Rock' && computerChoice=='Paper'){
        return [myPoint, computerPoint+1]
    } else if (myChoice=='Rock' && computerChoice=='Scissors'){
        return [1+myPoint, computerPoint]
    } else if (myChoice=='Paper' && computerChoice=='Rock'){
        return [1+myPoint, computerPoint]
    } else if (myChoice=='Paper' && computerChoice=='Scissors'){
        return [myPoint, 1+computerPoint]
    } else if (myChoice== 'Scissors' && computerChoice== 'Paper'){
        return [1+myPoint, computerPoint]
    } else if (myChoice=='Scissors' && computerChoice=='Rock'){
        return [myPoint, 1+computerPoint]
    }
}




let playerPoints = [0, 0]
primeBtn.forEach(item => {

    item.addEventListener('click', function(){
        const computerChoice = randomChoose();

        const myChoice = this.innerText;
        // console.log(myChoice, computerChoice)
        let [myPoint, comPoint] = points(myChoice, computerChoice);
        console.log(myPoint, comPoint)

// if score reaches to 3, game will stop
        if (playerPoints[0]<3 && playerPoints[1]<3){
            if(myPoint=== comPoint){
                resultMsg.innerText = `'It's a tie! Both chose ${myChoice}`
            } else{
                if(myPoint>comPoint){
                    playerPoints[0] += myPoint
                    playerScore.innerText = playerPoints[0]
                    resultMsg.innerText= `Player wins! ${myChoice} beats ${computerChoice}`   //massage
                } else{
                    playerPoints[1] +=comPoint
                    computerScore.innerText = playerPoints[1]  //score update
                    resultMsg.innerText= `Computer wins! ${computerChoice} beats ${myChoice}`
                }
                
            
            }
            
        }
        
        // updating score
        // playerScore.innerText = playerPoints[0]
        // computerScore.innerText = playerPoints[1]
        let human
        let computer
        let winner
        if (playerPoints.some(val=> val===3)){
            human = playerPoints[0];
            computer = playerPoints[1];
            if(human>computer){
                winner = 'Player'
            } else{
                winner = 'Computer'
            }
            btnSection.classList.toggle('dispNon');
            resultMsg.innerText= `${winner} wins! ${myChoice} beats ${computerChoice}`
            winnerMsg.innerText = `${winner} has won the game!`
            resetGame.style.display = 'block'
        }
        // console.log(playerPoints[0], playerPoints[1])
    });
});

resetGame.addEventListener('click', function(){
    resetGame.style.display= 'none'
    btnSection.classList.toggle('dispNon');
    playerPoints[0] = 0
    playerPoints[1] = 0
    resultMsg.innerText = ""
    winnerMsg.innerText = ""
    playerScore.innerText = 0
    computerScore.innerText = 0
    // console.log(playerPoints, resultMsg, winnerMsg, playerScore)
});

