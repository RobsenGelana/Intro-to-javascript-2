//Simple calculator
let opp = prompt("choose operator '+, -, *, /'")
let numOne = parseInt(prompt("Enter a first number"))
let numTwo = parseInt(prompt("Enter second number "))
//simple logic
if (opp == '+'){
    let result = numOne + numTwo
    alert("result is " + result)
}else if (opp == '-'){
    let result = numOne - numTwo
    alert("result is " + result)
}else if (opp == '*'){
    let result =  numOne * numTwo
    alert("result is " + result)
}else if (opp == '/'){
    let result = numOne / numTwo
    alert("result is " + result)
}else{
    alert("Invalid operator")
}
