function factorial(number) {
    if(number<0){
    return "give valid input"
    }
     else if(number ===0 || number ===1) {
        return 1;
     } else {
        return [...Array(number).keys()].reduce((accumulator, currentValue)=> accumulator *(currentValue+1),1);
     }
    }
var num=parseInt(prompt("Enter the number to find the factorial of that number"))
const result = factorial(num);
console.log("The Factorial of "+ num + " is "+result)
