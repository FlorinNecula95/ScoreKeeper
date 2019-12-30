var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var span1 = document.querySelector("#span1")
var span2 = document.querySelector("#span2");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");

p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            gameOver = true;
            span1.classList.add("green");
        }
        span1.textContent = p1Score;
    }
    
})
p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === winningScore){
            gameOver = true;
            span2.classList.add("green");
        }
        span2.textContent = p2Score;
    } 
})

resetButton.addEventListener("click", function() {
    reset();
})

function reset(){
    p1Score = 0;
    p1Score = 0;
    span1.textContent = 0;
    span2.textContent = 0;
    span1.classList.remove('green');
    span2.classList.remove('green');
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
})