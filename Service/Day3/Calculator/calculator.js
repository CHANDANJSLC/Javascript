var  sum = (a,b) => a+b;
var minus = (a,b) => a-b;
var multiply = (a,b) => a*b;

function calculator(){
    var operation = prompt("Enter the Operation to be performed('sum','minus','mul')")

    var num1 = parseFloat(prompt("Enter the first number"))
    var num2 = parseFloat(prompt("Enter the second number"))

    var result;

    switch(operation){
        case 'sum':
            result = sum(num1,num2)
            break;
        case 'minus':
            result = minus(num1,num2)
            break;
        case 'mul':
                result = multiply(num1,num2)
                break;
        default:
            console.log("Invalid operation choice")
            return;
    }
    console.log(result)
    }
calculator();