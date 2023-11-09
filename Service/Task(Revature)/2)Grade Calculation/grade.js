let grade=parseInt(prompt("Enter your numerical marks obtained(0 to 100)to know your grade"))
if(grade>=90){
    console.log("A");
}
    else if(grade>=80 && grade<=89){
        console.log("B");
    }
    else if(grade>=70 && grade<=79){
        console.log("C");
    }
    else if(grade>=60 && grade<=69){
        console.log("D");
    }
    else if(grade<60){
        console.log("D");
    }
    else{
        console.log("F");
    }