//Map()->Return the thrice the value of each numbers.
var number=[1,2,3,4,5]
var thrice = number.map((num)=>{
    return num*3;
})
console.log(thrice)


//Reduce()->multiply all the values into single vlaue.
var number = [1,2,3,4,5];
var result =number.reduce((acc,Value)=>acc*Value);
console.log(result);

//1)Check if a year is leap year or not.
function isLeapyear(year){
    if(year %4 ===0 && year%100!==0 || year%400==0){
        return true;
    }else{
        return false;
    }
}
const yearToCheck =parseInt(prompt("Enter year to see whether the given number is leap year or not "));

if(isLeapyear(yearToCheck)){
    console.log(yearToCheck+" is a leap year");
} else {
    console.log(yearToCheck+"is not a leap year");
}

