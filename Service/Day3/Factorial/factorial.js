function Factorial(number){
    if(number ===0 || number ===1) {
        return 1;
    }
var a =1;
for(var i = 2;i<=number;i++){
    a=a*i;
}
return a;
}
var inputnumber = parseInt(prompt("Enter the factorial number"))
var fac = Factorial(inputnumber);
console.log(fac)