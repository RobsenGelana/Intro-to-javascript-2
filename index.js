//Simple calculator
let numOne = parseInt(prompt("Enter a first number"))
let opp = prompt("choose operator '+, -, *, /'")
let numTwo = parseInt(prompt("Enter second number"))
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
