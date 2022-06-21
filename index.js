//Simple calculator
let numOne = prompt("Enter a first number")
let opp = prompt("choose operator '+, -, *, /'")
let numTwo = prompt("Enter second number")
//simple logic
if (opp == '+'){
    let result = numOne + numTwo
    alert(result)
}else if (opp == '-'){
    let result = numOne - numTwo
    alert(result)
}else if (opp == '*'){
    let result =  numOne * numTwo
    alert(result)
}else if (opp == '/'){
    let result = numOne / numTwo
    alert(result)
}else{
    alert("Invalid operator")
}
