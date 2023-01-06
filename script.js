console.log(5+7)
function getComputerChoice(){
    var arr = ["Rock", "Paper", "Scissors"];
    var randomNumber = Math.floor(Math.random()*arr.length);
    return arr[randomNumber]
}
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
