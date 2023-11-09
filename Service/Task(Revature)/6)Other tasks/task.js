//1)Arrow function to add 2 numbers and return the sum.
var a = (a,b)=>a+b
var add = a(10,20);
console.log(add);

//2)print the location of "my" in a string "I am enjoying my training"
 
var str = "I am enjoying my training";
var str1 = "my";
var str2 = str.indexOf(str1);
console.log(`The location of "${str1}" the string "${str}" is "${str2}"`)
//3)print the location of "m" in a string "I am enjoying my training"
var str3 = "m";
var str4 = str.indexOf(str3);
console.log(`The location of "${str3}" the string "${str}" is "${str4}"`)
//4)extract complete string from index 3 of the string "I am enjoying my training". and store in a variable
var a= str.slice(3)
str.slice(3)
//5)extract string from index 0 to 4 from the string "I am enjoying my training". and store in a variable.
var b = str.slice(0,5)
console.log(b);
//6)replace "training" with "journey" in "I am enjoying my training". and store in a variable.
var c=str.replace("training","journey");
console.log(c);
//7)Print all the characters of a string using for loop. can use charAt() or str[];
var result="";
for(var i=0;i< str.length;i++){
    result = result+str[i]} //or chAt(i)
    console.log(result);
//8)store string str="a,b,c" into an array.
var str = "a,b,c"
var arr = str.split(",")
console.log(arr);
//9)remove white spaces from the string str=" abc ".
var str ="   abc   "
var trim = str.trim()
console.log(trim);
//10)add two string using concat() function. and pring them. make sure there is space between concatinated elements.
var str1= "chandan"
var str2 = " is a good boy"
var result = str1.concat(str2);
console.log(result);

var a ="5"+2;
var b ="5"-2;
console.log(a);
console.log(b);